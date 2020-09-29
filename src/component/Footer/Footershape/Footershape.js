import React from 'react'
import styles from './Footershape.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'

const Footershape = (props) => {
    return (
        <div className={styles.footermain}>
        <div className={styles.footerwrap}>
            <FontAwesomeIcon className={styles.icons} size="lg" icon={props.email} />
            <FontAwesomeIcon className={styles.icons} size="lg" icon={props.phone} />
       
            </div>
            <div className={styles.footertxt}>
    <p>{props.text}</p>
            </div>
        
        </div>
    )
}


export default Footershape
