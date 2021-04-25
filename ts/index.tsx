import * as React from 'react'
import {render} from 'react-dom'
import Profile from "./components/profile"
import SvgGrid from "./components/svg_grid"
import "../less/index.less"

window.onload = () => {
    const $main = document.querySelector('#main')

    const profile_data: any = {
        name: 'からあげクン',
    }

    // const base_status: any = {
    //     skill: 12,
    //     body: 5,
    //     mental: 9,
    // }
    //
    // const levels_data: any = {
    //     exp: 5000,
    //     lv: 2
    // }

    const cy = 100

    const useCx = (d_value: number) => {
        const [num, setNum] = React.useState(d_value)
        const cx = (x: number) => {
            setNum(x)
        }
        return [num, cx] as const
    }
    const [cx, setX] = useCx(100)

    const MainApp = () => {
        return (
            <div>
                <Profile {...profile_data}/>
                <SvgGrid cx={cx} cy={cy} fill='red' setX={(x: number) => {setX(x)}}/>
                <SvgGrid cx={cx} cy={cy} fill='blue' setX={(x: number) => {setX(x)}}/>
            </div>
        )
    }

    render(<MainApp/>, $main)
}