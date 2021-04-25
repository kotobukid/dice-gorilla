import * as React from 'react'

const Profile: React.FC<any> = (props) => {
    const [name, setName] = React.useState(props.name)

    const log = (event: React.MouseEvent) => {
        event.preventDefault()
        console.log({
            name
        })
    }

    return (
        <div id="profile">
            <a href="#" onClick={log}>Print</a>
            <table>
                <tbody>
                <tr>
                    <th>キャラクター名</th>
                    <td><input type="text" value={name} onChange={e => {
                        setName(e.target.value)
                    }}/></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Profile