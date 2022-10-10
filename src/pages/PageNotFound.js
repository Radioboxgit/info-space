import styles from './PageNotFound.module.css'
import { useNavigate } from 'react-router-dom'

export default function Home(){
    const navigate = useNavigate()
    const returnHome =() =>{
        navigate('/',{replace:true})
    }
    return (
            <div className={styles.container}>  
                <button onClick={returnHome} className={styles['call-to-action']}> BACK TO HOME </button>
            </div>
    )
}