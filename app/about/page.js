import styles from '@/app/about/about.module.css'

export default function About() {
    return (
       <div>
        <h1 className={styles.about}>Sobre Nós</h1>
        <p className={styles.paragrafo1}>Olá, me chamo Augusto e sou um humilde e brilhante aluno do Senac MG.</p>
        <p className={styles.paragrafo2}>Desesnvolvi esse site para fins escolares e também para mostrar minha genialidade.</p>
       </div> 
    )
}