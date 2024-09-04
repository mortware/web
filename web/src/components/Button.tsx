import { cn } from "@/lib/utils/css";
import { Icons } from "../lib/icons";
import Icon from "./Icon";
import { PropsWithChildren } from "react";

type ButtonProps = {
  url: string;
  label: string;
  icon?: keyof typeof Icons;
  cta?: boolean;
} & PropsWithChildren;

export default function Button({ children, url, label, icon }: ButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      className={cn([
        "flex gap-2 items-center px-3 py-1",
        "shadow text-white rounded",
        "bg-cyan-700",
      ])}
      rel="noopener noreferrer"
    >
      {icon && <Icon icon={icon} className="" />}
      <div>{children ? children : label}</div>
    </a>
  );
}
