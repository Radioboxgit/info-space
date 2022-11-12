import { FaGithub,FaLinkedinIn,FaTwitter,FaRegCopyright } from 'react-icons/fa';
import styles from './Footer.module.css'


export default function Footer(){
    return (
        <div className={styles.container}>
            <div>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/AnigboguNedu"><FaTwitter style={ {color: "#b0aafd","fontSize":"30px","margin":"3px" }}/> </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chinedu-anigbogu-62ab74188"><FaLinkedinIn style={ { color: "#6358fd","fontSize":"30px","margin":"3px"}}/> </a> 
                <a target="_blank" rel="noreferrer" href="https://github.com/Radioboxgit/info-space"><FaGithub style={ { color: "#bfbfc2","fontSize":"30px","margin":"3px"}} /> </a>          
            </div>  
            <div className={styles.copy}> <FaRegCopyright style={ { color: "white","fontSize":"15px","margin":"2px"}}/>  Copyright 2022 INFO-SPACE Powered By<a href="https://bio.link/codeclas" rel="noreferrer" target="_blank" >@codeclas</a> </div>        
        </div>
    )
}