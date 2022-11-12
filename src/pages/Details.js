import { useParams } from 'react-router-dom'
import { useEventStore } from '../store/EventStore'
import styles from "./Details.module.css"
import CountDownTimer from '../Components/CountDown'
import "@animxyz/core";
import { XyzTransition} from "@animxyz/react";


export default function  Details(){
    let events= useEventStore((state)=>state.events)
    const { id } = useParams()
    const event= (events !== undefined )? events._items.filter((e)=>e.key===id)[0]: null
    // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    return ( 
    <div className={styles.parent}>
        {/* <p>{vw}</p> */}
        { (events !== undefined ) ?  
        <div className={styles.container} >
            <XyzTransition appear duration="auto"> 
                <div xyz ="fade small stagger ease-in-front duration-30 flip-right perspective-5"  className={styles['image-container']}> 
                    <img  className={styles['launch-image']} src={event.imageUrl} alt={event.title} />
                </div>
            </XyzTransition>
            <XyzTransition appearVisible={{ threshold: 0.5, rootMargin: '50px' }} duration="auto"> 
                <div  className={styles.details} xyz ="fade small stagger ease-out-back duration-30  flip-left perspective-5" >
                    <h2 className={styles.title}>{event.title} </h2>
                    <div className={styles.takeoff}>
                        <h6>TAKE OFF &#9202; {new Date(event.takeOff).toString()}</h6>
                        <CountDownTimer dateCountDown={event.takeOff}/>
                    </div>
                    <div className={styles.mission}>
                        <h4>MISSION DESCRIPTION ☊ </h4>
                        <p className={styles['mission-description']} >{event.missionDescription}</p>
                    </div>
                    <div className={styles['location-details']}>
                        <h4>TAKE OFF LOCATION🌐</h4>
                        <table className={styles['data-table']}>
                            <tbody>
                                <tr>
                                    <td><span className={styles.desc}>PAD:</span></td>
                                    <td>{event.launchPad}, {event.location}</td>
                                </tr>
                                <tr>
                                    <td><span className={styles.desc}>LAT/LONG:</span></td>
                                    <td>LATITIDE: {event.latitude}, LONGITUDE: {event.longitude}</td>
                                </tr>
                                <tr>
                                    <td><span className={styles.desc}>ORBIT:</span></td>
                                    <td> {event.orbit}   🪐</td>
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


