import { DetailedHTMLProps, HTMLAttributes } from "react";

type size = "xs" | "sm" | "md" | "lg" | "xl";

type HeadingProps = {
  size?: size;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const size_to_font_size = (s: size) => {
  const mappings: Record<size, string> = {
    xs: "text-base",
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-4xl",
  };
  return mappings[s] + " ";
};

export default function Heading({
  children,
  className,
  size = "lg",
  ...props
}: HeadingProps) {
  return (
    <h1
      {...props}
      className={"text-green " + size_to_font_size(size) + className}
    >
      {children}
    </h1>
  );
}
