import styles from "./EventDetails.module.css"
import CountDownTimer from './CountDown'
import "@animxyz/core";
import { XyzTransition} from "@animxyz/react";


const data={
'reference_id': '4f77007c-9bb3-4bf4-bab3-937e65f75c45',
'title': 'astra-rocket-3-tropics-3',
'takeOff': '2022-08-31T00:00:00Z',
'rocket': 'Astra Rocket 3',
'missionTitle': 'TROPICS-3',
'missionDescription': "Last two operational (TROPICS-06 & TROPICS-07) satellites for NASA's Time-Resolved Observations of Precipitation Structure and Storm Intensity with a Constellation of SmallSats (TROPICS) mission.The CubeSats are designed to provide rapid-refresh microwave measurements that can be used to determine temperature, pressure, and humidity inside hurricanes as they form and evolve.",
'orbit': 'Low Earth Orbit',
'launchPad': 'Space Launch Complex 46',
'latitude': '28.4584',
'longitude': '-80.5284',
'location': 'Cape Canaveral, FL, USA',
'imageUrl': 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/astra2520rocke_image_20220608181906.jpeg'
}
//const endpoint="https://57n9az.deta.dev" 

function Event(){
    return (     
    <div className={styles.parent}>
        <div className={styles.container} >
            <XyzTransition appear duration="auto"> 
                <div xyz ="fade small stagger ease-in-front duration-30 flip-right perspective-5"  className={styles.image}> 
                    <img  className={styles['launch-image']} src={data.imageUrl} alt={data.title} />
                </div>
            </XyzTransition>
            <XyzTransition appearVisible={{ threshold: 0.5, rootMargin: '50px' }} duration="auto"> 
                <div  className={styles.details} xyz ="fade small stagger ease-out-back duration-30  flip-left perspective-5" >
                    <h2 className={styles.title}>{data.title} </h2>
                    <div className={styles.takeoff}>
                        <h6>TAKE OFF &#9202; {new Date(data.takeOff).toString()}</h6>
                        <CountDownTimer dateCountDown={data.takeOff}/>
                    </div>
                    <div className={styles.mission}>
                        <h4>MISSION ☊ </h4>
                        <p className={styles['mission-description']} >{data.missionDescription}</p>
                    </div>
                    <div className={styles.mission}>
                        <h4>TAKE OFF LOCATION🌐</h4>
                        <div className={styles['location-details']}>
                            <table className={styles['data-table']}>
                                <tr>
                                    <td><span className={styles.desc}>PAD:</span></td>
                                    <td>{data.launchPad}, {data.location}</td>
                                </tr>
                                <tr>
                                    <td><span className={styles.desc}>LAT/LONG:</span></td>
                                    <td>LATITIDE: {data.latitude}, LONGITUDE: {data.longitude}</td>
                                </tr>
                                <tr>
                                    <td><span className={styles.desc}>ORBIT:</span></td>
                                    <td> {data.orbit}   🪐</td>
                                </tr>
                                <tr>
                                    <td><span className={styles.desc}>VEHICLE:</span></td>
                                    <td> {data.rocket}  🚀</td>
                                </tr>
                            </table> 
                        </div>
                    </div>
                </div>
            </XyzTransition>
        </div>
    </div>
      )
}

export default Event