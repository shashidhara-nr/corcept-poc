import { ReactNode } from "react";
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-4 px-4 ${className}`}>{children}</div>;
}
