
import styles from './styles.module.css'

function Card( props ){
    
    return(
        <>  
            <div className={styles.container}>
                <img src={props.book} alt={props.title} className={styles.book}/>
                <div>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.texto}>
                        {props.description} 
                    </p>
                    <button className={styles.botao}>{props.texto}</button> 
                </div>
            </div>
        </>
    )
}
export default Card