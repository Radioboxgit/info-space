//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Triangle } from  'react-loader-spinner'
import { useState,useEffect} from "react";
import styles from './Loading.module.css'

export default function Loading(){

    const [count, setCount] =useState(6)
    useEffect(() => {
        const interval = setInterval(() => {
          setCount(prevcount=>prevcount-1)
        }, 1000);
        return () => clearInterval(interval);
      }, []);



    return (
    <div className={styles.container}>
        <h2 className={styles.header}>LOADING</h2>
        <p className={styles.takeoff}>Few Seconds To Take Off : 00:00:{count}</p>
        <Triangle  width="100" color="#404247" ariaLabel='loading'/>
    </div>
    )
}