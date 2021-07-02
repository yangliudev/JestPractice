import React, {FC} from "react";
import './button.css';

interface AppProps {
    label: string,
}

const Button: FC<AppProps> = ({label}: AppProps) => {
    return <div data-testid="button" className="button-style">{label}</div>
}

export default Button;