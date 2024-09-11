import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>História de São João del Rei</h1>
      <p className={styles.paragrafo}> 
        São João del-Rei, localizada no estado de Minas Gerais, Brasil, tem uma rica história que remonta ao período colonial. Fundada oficialmente em 1709, a cidade surgiu em meio à 
        corrida do ouro no Brasil, quando a região foi ocupada por bandeirantes e mineradores em busca de riquezas. O nome da cidade é uma homenagem ao rei João V de Portugal, que ajudou
        a financiar a exploração das minas. <br/>São João del-Rei rapidamente se desenvolveu como um importante centro comercial e religioso, com a construção de igrejas e conventos, refletindo
        a influência da arquitetura barroca. <br/>Ao longo dos séculos, a cidade passou por transformações significativas, mantendo um patrimônio histórico considerável. Hoje, é conhecida 
        por seu centro histórico bem preservado, com edifícios coloniais e igrejas ornamentadas, o que a torna um importante destino turístico e cultural no Brasil. Além disso, 
        São João del-Rei desempenhou um papel importante na Inconfidência Mineira, um movimento revolucionário contra o domínio colonial português.
      </p>
    </div>
  );
}
