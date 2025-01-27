import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({ className, children,...props }: ButtonProps) {
  return (
    <button
      {...props} className={ "bg-gray-700 font-bold text-lightgreen rounded-md px-1 " + className }>
      { children }
    </button>)
}
