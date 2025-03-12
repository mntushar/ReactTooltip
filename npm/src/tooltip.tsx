import { Fragment, ReactNode, useEffect, useState } from "react";

import 'react-tooltip-component/dist/tooltip.css'
import React from "react";

interface TooltipProps {
    text: string;
    possition?: string | null;
    children: ReactNode;
}

const Tooltip = ({ text, possition, children }: TooltipProps) => 
    {
    const[tooltipClass, setTooltipClass] = useState<string>('tooltip-wrapper-right');
    useEffect(() => {
        setTooltipClass(possition ? `tooltip-wrapper-${possition}` : "tooltip-wrapper-right");
    }, [possition])

    return (
        <Fragment>
            <div className={tooltipClass}>
                <span id="spanText">{text}</span>
                {children}
            </div>
        </Fragment>
    );
}

export { Tooltip };