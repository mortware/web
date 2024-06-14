import { Icons } from "../lib/icons";
import { cn } from "../lib/utils/css";

type IconProps = React.SVGAttributes<SVGElement> & {
  icon: keyof typeof Icons;
  title?: string;
  size?: number;
};

export default function Icon({ icon, size, className, ...rest }: IconProps) {
  const IconComponent = Icons[icon] as React.ComponentType<
    React.SVGProps<SVGSVGElement>
  >;
  return (
    <IconComponent
      {...rest}
      strokeWidth={2}
      className={cn("inline-block", className)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}
