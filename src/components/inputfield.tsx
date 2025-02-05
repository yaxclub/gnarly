import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type InputfieldProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Inputfield({ className, ...props }: InputfieldProps) {
  return (
    <div>
      <input
        className = { "bg-sunset px-1.5 py-2 rounded-md text-jet " + className }
        placeholder = { "Enter text..." }
        type = { "text" }
        { ...props }/>
    </div>
    )
}
