import { Fragment, ReactNode } from "react";

import './tooltip.css'

interface TooltipProps {
    text: string;
    children: ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
    return (
        <Fragment>
            <div className="tooltip-wrapper">
                <span id="spanText">{text}</span>
                {children}
            </div>
        </Fragment>
    );
}