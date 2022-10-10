import styles from './Error.module.css'



export default function Error(props){
const error=props.message;
return (
<div className={styles.container}> 
<div  className={styles.message}>
    <h1>ERROR OCCURRED!</h1>
    <p>{error}</p>
</div>
</div>
)
}