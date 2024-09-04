import * as React from "react";
import { FunctionComponent, LazyExoticComponent } from "react";

interface IRoute {
  path: string;
  Element: LazyExoticComponent<FunctionComponent>;
}

export function getRoutes(): IRoute[] {
  const routes: IRoute[] = [];
  const pages = import.meta.glob<{ readonly default: FunctionComponent }>(
    "./pages/**/*.page.tsx",
  );

  for (const [key, value] of Object.entries(pages)) {
    const fileName = key.match(/\.\/pages\/(.*)\.page\.tsx$/)?.[1];
    if (!fileName) {
      continue;
    }

    const routeSegments = fileName.split("/");
    if (
      routeSegments[routeSegments.length - 1] ===
      routeSegments[routeSegments.length - 2]
    ) {
      routeSegments.pop();
    }
    let routePath = routeSegments.join("/");
    routePath = routePath === "home" ? "" : routePath;
    const path = `/${routePath
      .split(".")
      .map((x) => x.replace(/\[([^/]+)]/g, "/$$$1"))
      .join("/")}`;

    routes.push({
      path,
      Element: React.lazy(value),
    });
  }

  return routes;
}
