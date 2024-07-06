import React from 'react';
import styles from './Questions.module.css';

const Questions = ({title, description}) => {
    const srcButtonMinus = '../../src/assets/images/icon-minus.svg';
    const srcButtonPlus = '../../src/assets/images/icon-plus.svg';

    const [isExpanded, setIsExpanded] = React.useState(false);

    function handleClick() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer} onClick={handleClick}>
                <h3 className={styles.title}>
                    {title}
                </h3>

                <div>
                    <img 
                        src={isExpanded ? srcButtonMinus : srcButtonPlus} 
                        alt="icon" 
                    />
                </div>
            </div>

            <div className={`
                ${styles.description}  
                ${isExpanded ? styles.show : styles.hidden}
            `}>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Questions