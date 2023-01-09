import { Link } from 'react-router-dom'
import './main.css'
function TOdo(){
    return(
        <div>
            <nav id='nav'></nav>
            <div id='middle'>
                <div id="sidesection">
                    <div id='log'><Link to='/login'>log out</Link></div>
                </div>
                <div id ='table'>
                    <div style={{float:'right',border:'2px solid pink'}}>Add new activity</div>
                    <table border="1">
                        <thead>
                            <tr>
                            <th>activity</th>
                            <th>status</th>
                            <th>time taken</th>
                            <th>ACtion</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                       
                    </table>
                </div>
            </div>
        </div>
    )
}
export default TOdo