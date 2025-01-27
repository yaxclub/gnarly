import { HTMLAttributes, DetailedHTMLProps } from "react";

type ParagraphProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
  >;

export default function Paragraph({ className, children, ...props }: ParagraphProps) {
  return (
    <p 
      {...props} className={ "text-green font-bold " + className }>
      { children }
    </p>)
  }
