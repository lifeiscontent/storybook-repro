import React from "react";

export function ButtonLabel({
  children,
}: React.PropsWithChildren<unknown>): JSX.Element {
  return <span>{children}</span>;
}
