import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button({ className, children,...props }: ButtonProps) {
  return (
    <button
      {...props} className={ "bg-gray-700 font-bold text-sunset rounded-md text-xl z-10 mx-1.5 my-4 " + className }>
      { children }
    </button>)
}
