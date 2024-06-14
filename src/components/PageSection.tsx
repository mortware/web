import { cn } from "@lib/utils/css";
import { HtmlHTMLAttributes, PropsWithChildren } from "react";

type PageSectionProps = {
  title: string;
  subtitle: string;
} & PropsWithChildren & HtmlHTMLAttributes<HTMLDivElement>;


export default function PageSection({ title, subtitle, children, className, ...rest }: PageSectionProps) {
  return (
    <section className={cn(["page-section pt-12 pb-4 lg:pt-16 lg:pb-12", className])} {...rest}>
      <h2 className="text-center text-4xl uppercase tracking-widest mb-4">{title}</h2>
      <p className="text-center text-2xl mb-8">{subtitle}</p>
      <div className="container mx-auto">
        {children}
      </div>

    </section>
  )
}