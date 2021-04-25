import * as React from 'react'
import {CSSProperties, MouseEventHandler} from "react";

declare type SVGStyleRecord = Record<string, CSSProperties>

const SvgGrid: React.FC<{ cx: number, cy: number, fill: string }> = props => {
    const [cx, setCx] = React.useState(props.cx)
    const [cy, setCy] = React.useState(props.cy)
    const r: number = 30
    const [dragging, setDragging] = React.useState(false)

    const setDragOn = (ev: React.MouseEvent) => {
        setDragging(true)
    }

    const setDragOff = () => {
        setDragging(false)
    }

    const mouse_dragging: MouseEventHandler = (ev: React.MouseEvent) => {
        if (dragging) {
            setCx(cx + ev.movementX)
            setCy(cy + ev.movementY)
        }
    }

    const style: SVGStyleRecord = {
        svg: {marginRight: '10px'},
        no_touch: {pointerEvents: 'none', fill: 'white'}
    }

    return (
        <svg width="500" height="300" style={style.svg}>
            <rect x="0" y="0" width={1200} height={800} fill="grey"/>
            <circle cx={cx} cy={cy} r={r} onMouseDown={setDragOn}/>
            {dragging ?
                <g>
                    <rect x="0" y="0" width={1200} height={800} fill={props.fill} opacity={0.5}
                          onMouseMove={mouse_dragging}
                          onMouseUp={setDragOff}
                          onMouseLeave={setDragOff}
                    />
                    <text style={style.no_touch} x={100} y={100}>dragging</text>
                </g>
                : <g/>
            }
        </svg>
    )
}

export default SvgGrid