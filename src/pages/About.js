import styles from "./About.module.css"


export default function About(){
    return (
            <div className={styles.container}>  
                <p className={styles.description} > Space travel has been one of man's greatest marvels. It has changed the way we perceive the world as we know it today, and given us new knowledge about the Universe around us.
                    From the brightest stars in the universe to the deepest reaches of space, <span className={styles['company-name']}>INFO-SPACE</span> will take you on a journey through the splendor of this fascinating Universe. With <span className={styles['company-name']}>INFO-SPACE</span> diverse range of contents, you're sure to find everything you need to feel right at home in this exciting universe.
                    As we all know, Space is an incredible frontier that is always pushing boundaries and making advancements. We're excited to see what new discoveries are, and we hope you will be too.
                    From informative articles to videos, <span className={styles['company-name']}>INFO-SPACE</span> offer something for everyone as they explore all that space has to offer. And don't worry – we'll keep things fun and interesting with an array of entertaining content tailored for your needs.
                    Stay up-to-date on the latest space news and discover the universe through our curated news content. Space is our passion, Space news is our obsession. We are dedicated to bringing you the latest information about all things related to outer space in an engaging manner that educates while entertaining at the same time.
                    So what are you waiting for? Join us on our journey through outer space today! </p>
            </div>
    )
}