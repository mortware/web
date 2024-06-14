import { cn } from "@lib/utils/css";
import { Icons } from "../lib/icons";
import Icon from "./Icon";

type ButtonProps = {
  url: string;
  label: string;
  icon: keyof typeof Icons;
  cta?: boolean;
}

export default function Button({ url, label, icon }: ButtonProps) {
  return (
    <a href={url} target="_blank" className={
      cn([
        "flex gap-2 items-center px-3 py-1",
        "shadow text-white rounded",
        "bg-cyan-700",
      ])}

      rel="noopener noreferrer">
      {icon !== null &&
        <Icon icon={icon} className="" />
      }
      <div>
        {label}
      </div>
    </a>
  )
}
