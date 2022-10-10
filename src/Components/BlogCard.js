import styles from './BlogCard.module.css'
 import {FaBlog,FaCopyright} from 'react-icons/fa';

export default function BlogCard(props){
const {imageUrl,url,title,summary,newsSite,publishedAt}=props.article
const date=new Date(publishedAt)


const HandleClick = () =>{
    window.open(url, "_blank");
}


return (
    <div title="Read More..." onClick={HandleClick} className={styles.container}>
        <div className={styles['image-container']} >
            <img className={styles['article-image']} src={imageUrl} alt={title}/>
            <p className={styles.date}>{date.getDate()} <br/> <span>{date.toLocaleString("default",{month:"short"})}</span></p> 
            <p className={styles['news-source']}><FaBlog/>{newsSite}<FaCopyright/>{date.getFullYear()}</p>
        </div>
        <p className={styles.title}>{ title } </p>
        <span className={styles.description}>{ summary }</span>
    </div>

)
}






