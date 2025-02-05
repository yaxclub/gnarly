import { DetailedHTMLProps, HTMLAttributes } from "react";

type WrapperProps = {} & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default function Wrapper({
  children,
  className,
  ...props
}: WrapperProps) {
  return (
    <div {...props} className={"w-full min-h-screen mx-auto bg-jet pt-4 " + className}>
      {children}
    </div>
  );
}
