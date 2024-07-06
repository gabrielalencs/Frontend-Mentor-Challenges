import Questions from '../Questions/Questions';
import styles from './ContainerQuestions.module.css';
import iconStar from '../../assets/images/icon-star.svg'

const ContainerQuestions = () => {
    return (
        <div className={styles.containerFaqs}>
            <div className={styles.titleContainer}>
                <img
                    src={iconStar}
                    alt="icon star"
                    className={styles.star} 
                />
                <h1 className={styles.title}>FAQs</h1>
            </div>

            <div>
                <Questions 
                    title='What is Frontend Mentor, and how will it help me?' 
                    description='Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It&apos;s suitable for all levels and ideal for portfolio building.'
                />

                <Questions 
                    title='Is Frontend Mentor free?' 
                    description='Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.' 
                />

                <Questions 
                    title='Can I use Frontend Mentor projects in my portfolio?' 
                    description='Yes, you can use projects completed on Frontend Mentor in your portfolio. It&apos;s an excellent way to showcase your skills to potential employers.' 
                />
                
                <Questions 
                    title='How can I get help if I&apos;m stuck on a challenge?' 
                    description='The best place to get help is inside Frontend Mentor&apos;s Discord community. There&apos;s a help channel where you can ask questions and seek support from other community members.' 
                />
            </div>
        </div>
    )
}

export default ContainerQuestions