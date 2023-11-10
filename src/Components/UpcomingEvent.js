import styles from "./UpcomingEvent.module.css"
import { useNavigate } from 'react-router-dom'



export default function UpcomingEvent(props){
    const {id,name,pad_location_name,net} = props.event
    const navigate=useNavigate()
    const goToEvent=()=>{
        navigate(`/flights/${id}`)
    }
    return (
        <div onClick={goToEvent} className={styles['flight']}>
        <table >
            <tbody>
                <tr>
                    <td><h6>FLIGHT:</h6></td>
                    <td className={styles['description']}>{name}</td>
                </tr> 
                <tr>
                    <td><h6>LOCATION:</h6></td>
                    <td  className={styles['description']}>{pad_location_name}</td>
                </tr> 
                <tr>
                    <td><h6>TAKEOFF:</h6></td>
                    <td  className={styles['description']}>{new Date(net).toString()}</td>
                </tr> 
            </tbody>
        </table>
    </div>
    )
}