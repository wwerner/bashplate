import * as React from "react";

export type HelloProps = {
    name: string
}
export const Hello = ({ name }: HelloProps) => <h3>Hello {name}</h3>
