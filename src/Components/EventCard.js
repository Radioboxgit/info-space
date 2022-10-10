import styles from './EventCard.module.css'
import { useNavigate } from 'react-router-dom'


export default function LaunchCard(props){
    const navigate=useNavigate()
    const goToEvent=()=>{
        navigate(`/flights/${key}`)
    }
        const { title,takeOff,imageUrl,key}=props.event
        const altText='event-image'
        return (
            <div className={styles.container}>
                <div className={styles['image-container']}>
                     <img className={styles['event-image']} src={ imageUrl } alt={altText}/>
                </div>
                <div className={styles.description}> 
                    <h3> {title} </h3> 
                    <p className={styles.date}>TAKE OFF &#9202; {new Date(takeOff).toString()}</p>
                    <div onClick={goToEvent} ><button className={styles.button}>{`SEE DETAILS  >`}</button></div>
                </div>
            </div>
        )
}