import styles from "./UpcomingEvent.module.css"
import { useNavigate } from 'react-router-dom'



export default function UpcomingEvent(props){
    const {key,title,launchPad,location,takeOff} = props.event
    const navigate=useNavigate()
    const goToEvent=()=>{
        navigate(`/flights/${key}`)
    }
    return (
        <div onClick={goToEvent} className={styles['flight']}>
        <table >
            <tbody>
                <tr>
                    <td><h6>FLIGHT:</h6></td>
                    <td className={styles['description']}>{title}</td>
                </tr> 
                <tr>
                    <td><h6>LOCATION:</h6></td>
                    <td  className={styles['description']}>{launchPad +','+ location}</td>
                </tr> 
                <tr>
                    <td><h6>TAKEOFF:</h6></td>
                    <td  className={styles['description']}>{new Date(takeOff).toString()}</td>
                </tr> 
            </tbody>
        </table>
    </div>
    )
}