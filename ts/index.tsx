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


    const MainApp = () => {
        const [x, setX] = React.useState(100)
        const [y, setY] = React.useState(100)

        return (
            <div>
                <Profile {...profile_data}/>
                <SvgGrid cx={x} cy={y} fill='red' setX={setX} setY={setY}/>
                <SvgGrid cx={x} cy={y} fill='blue' setX={setX} setY={setY}/>
            </div>
        )
    }

    render(<MainApp/>, $main)
}