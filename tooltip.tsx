import { Fragment, ReactNode } from "react";

import './tooltip.css'

interface TooltipProps {
    text: string;
    possition?: string | null;
    children: ReactNode;
}

export default function Tooltip({ text, possition, children }: TooltipProps) {
    const tooltipClass = possition ? `tooltip-wrapper-${possition}` : "tooltip-wrapper-right";
    return (
        <Fragment>
            <div className={tooltipClass}>
                <span id="spanText">{text}</span>
                {children}
            </div>
        </Fragment>
    );
}