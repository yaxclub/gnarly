import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({ className, children,...props }: ButtonProps) {
  return (
    <button
      {...props} className={ "bg-sky-700 font-bold " + className }>
      { children }
    </button>)
}
