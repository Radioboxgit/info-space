import { useState,useEffect } from "react";
import styles from './CountDown.module.css'

// reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown

export default function CountDownTimer(props){
const { dateCountDown } = props
const [epoch, setEpoch] =useState('')

useEffect(()=>{
const getEpoch =() =>{
    const dateCountDownUnix=new Date(dateCountDown).getTime()
    const currentDate=new Date().getTime()
    const distance= dateCountDownUnix - currentDate
    if (distance<0){
        setEpoch('AIR LIFTED')
    }else{
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setEpoch(`${days} Days: ${hours} Hours: ${minutes} Minutes: ${seconds} Seconds`)
    }
}
const myInterval=setInterval(getEpoch,1000);
return () =>{ clearInterval(myInterval) }
}, [dateCountDown]);

return (
  <div>
    <p className={styles.container}><span className={styles.counter}> {epoch} </span></p>
  </div>
)



}