import styles from './Banner.module.css'
import { NavLink } from "react-router-dom";
import { FaGithub,FaLinkedinIn,FaBlog,FaTwitter } from 'react-icons/fa';


export default function Banner(){
    const style = { color: "yellow" }
    return (
        <>
           <div className={styles['banner-heading']}> 
                    <div className={styles.logo}>INFO <FaBlog style={style}/>SPACE</div>
                    <div className={styles['banner-link']}> 
                        <div><NavLink to="/"  style={({ isActive }) => (isActive ? {color: '#fc8800'} : {color: 'rgb(85, 83, 83)'})}>HOME</NavLink></div>
                        <div><NavLink to="/flights" style={({ isActive }) => (isActive ? {color: '#fc8800'} : {color: 'rgb(85, 83, 83)'})}>FLIGHTS</NavLink></div>
                        <div><NavLink to="/about" style={({ isActive }) => (isActive ? {color: '#fc8800'} : {color: 'rgb(85, 83, 83)'})}>ABOUT US</NavLink></div>
                    </div>
            </div>
            <div className={styles['banner-welcome']}>
                <div className={styles['message']}>
                    <p> Welcome, dear space fan; you've come to the right place.  &nbsp;</p>
                    <p>Relax and satisfy your curiosity with our curated space news.</p>
                    <p>Space Exploration is our passion. Space News is our obsession.</p>
                    <div>
                        <a href="https://twitter.com/AnigboguNedu"><FaTwitter style={ {color: "#b0aafd","fontSize":"30px","margin":"3px" }}/> </a>
                        <a href="https://www.linkedin.com/in/chinedu-anigbogu-62ab74188"><FaLinkedinIn style={ { color: "#6358fd","fontSize":"30px","margin":"3px"}}/> </a> 
                        <a href="https://github.com/Radioboxgit"><FaGithub style={ { color: "#bfbfc2","fontSize":"30px","margin":"3px"}} /> </a>
                    </div> 
                </div>
            </div>
        </>
    )
}