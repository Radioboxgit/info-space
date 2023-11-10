import { useParams } from 'react-router-dom'
import { useEventStore } from '../store/EventStore'
import styles from "./Details.module.css"
import CountDownTimer from '../Components/CountDown'
import "@animxyz/core";
import { XyzTransition} from "@animxyz/react";


export default function  Details(){
    let events= useEventStore((state)=>state.events)
    const { id } = useParams()
    const event= (events !== undefined )? events.filter((e)=>e.id===id)[0]: null
    const statusClass = (event.status?.abbrev === 'Go' || event.status?.abbrev ==='Success')? 'go' : 'notgo';
    // console.log(statusClass)
    // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    return ( 
    <div className={styles.parent}>
        {/* <p>{vw}</p> */}
        <h2  className={styles.heading}>Takeoff Details</h2>
       
        { (events !== undefined ) ?  
        <div className={styles.container} >
          
            <XyzTransition appear duration="auto"> 
                <div xyz ="fade small stagger ease-in-front duration-30 flip-right perspective-5"  className={styles['image-container']}> 
                    <img  className={styles['launch-image']} src={event.url} alt={event.name} />
                </div>
            </XyzTransition>
            <XyzTransition appearVisible={{ threshold: 0.5, rootMargin: '50px' }} duration="auto"> 
                <div  className={styles.details} xyz ="fade small stagger ease-out-back duration-30  flip-left perspective-5" >
                    <p  className={` ${styles.status} ${styles[statusClass]}`}> 
                    {event.status.abbrev}  
                    <span>{event.status.description}</span>
                    </p>
                    <h2 className={styles.title}>{event.name} </h2>
                    <div className={styles.takeoff}>
                        <h6>TAKE OFF &#9202; {new Date(event.net).toString()}</h6>
                        <CountDownTimer dateCountDown={event.net}/>
                    </div>
                    <div className={styles.mission}>
                        <h4>MISSION DESCRIPTION ☊ </h4>
                        <p className={styles['mission-description']} >{event.mission_description}</p>
                    </div>
                    <div className={styles['location-details']}>
                        <h4>🌐 TAKE OFF LOCATION 🌐</h4>
                        <table className={styles['data-table']}>
                            <tbody>
                                <tr>
                                    <td><span className={styles.desc}>PAD:</span></td>
                                    <td>{event.pad_name} {event.pad_location_name}</td>
                                </tr>
                                <tr>
                                    <td><span className={styles.desc}>LAT/LONG:</span></td>
                                    <td>LATITIDE: {event.pad_latitude}, LONGITUDE: {event.pad_longitude}</td>
                                </tr>
                                <tr>
                                    <td><span className={styles.desc}>ORBIT:</span></td>
                                    <td> {event.mission_orbit_name}   🪐</td>
                                </tr>
                                <tr>
                                    <td><span className={styles.desc}>VEHICLE:</span></td>
                                    <td> {event.rocket}  🚀</td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                </div>
            </XyzTransition>
        </div> : <h4 className={styles.notification}> EVENTS LOADING ....</h4>   }
    </div> 
     )
}


