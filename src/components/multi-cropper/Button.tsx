import React from "react";
import "./button.css";

export interface ButtonProps {
    label: string
}

const Button = (props: ButtonProps) => {
    return <button className="button">{props.label}</button>
};

export default Button