import styles from './Banner.module.css'
import { NavLink } from "react-router-dom";
import { FaGithub,FaLinkedinIn,FaBlog,FaTwitter } from 'react-icons/fa';


export default function Banner(){
    const style = { color: "yellow" }
    return (
        <>
           <div className={styles['banner-heading']}> 
                    <div className={styles.logo}>iNFO <FaBlog style={style}/>SPACE</div>
                    <div className={styles['banner-link']}> 
                        <div><NavLink to="/"  style={({ isActive }) => (isActive ? {color: '#fc8800'} : {color: 'rgb(85, 83, 83)'})}>HOME</NavLink></div>
                        <div><NavLink to="/flights" style={({ isActive }) => (isActive ? {color: '#fc8800'} : {color: 'rgb(85, 83, 83)'})}>FLIGHTS</NavLink></div>
                        <div><NavLink to="/about" style={({ isActive }) => (isActive ? {color: '#fc8800'} : {color: 'rgb(85, 83, 83)'})}>ABOUT US</NavLink></div>
                    </div>
            </div>
            <div className={styles['banner-welcome']}>
                <div className={styles['message']}>
                    <h2>Welcome to iNFOSPACE</h2>
                    <p>Space Exploration is Our passion, Space News is Our Obsession.</p>
                    <div>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/AnigboguNedu"><FaTwitter style={ {color: "#b0aafd","fontSize":"30px","margin":"3px" }}/> </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chinedu-anigbogu-62ab74188"><FaLinkedinIn style={ { color: "#6358fd","fontSize":"30px","margin":"3px"}}/> </a> 
                        <a target="_blank" rel="noreferrer" href="https://github.com/Radioboxgit/info-space"><FaGithub style={ { color: "#bfbfc2","fontSize":"30px","margin":"3px"}} /> </a>
                    </div> 
                </div>
            </div>
        </>
    )
}