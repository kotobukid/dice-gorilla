import * as React from 'react'
import axios, {AxiosResponse} from 'axios'

const Profile: React.FC<any> = (props) => {
    const [name, setName] = React.useState(props.name)

    const log = (event: React.MouseEvent) => {
        event.preventDefault()
        console.log({
            name
        })
        axios.post('/data/mock_save.json', {name}).then((data: AxiosResponse<{success: boolean, message: string}>) => {
            console.log(data.data.success)
            alert(data.data.message)
            setName(data.data.message);
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