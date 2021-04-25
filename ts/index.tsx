import * as React from 'react'
import {render} from 'react-dom'
import Profile from "./components/profile"
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
        return (
            <div>
                <Profile {...profile_data}/>
            </div>
        )
    }

    render(<MainApp/>, $main)
}