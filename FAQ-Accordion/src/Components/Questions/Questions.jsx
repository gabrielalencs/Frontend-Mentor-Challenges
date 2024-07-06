import React from 'react';
import styles from './Questions.module.css';
import iconMinus from '../../assets/images/icon-minus.svg';
import iconPlus from '../../assets/images/icon-plus.svg';

const Questions = ({title, description}) => {

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
                        src={isExpanded ? iconMinus : iconPlus} 
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