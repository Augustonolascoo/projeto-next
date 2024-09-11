'use client'

import React from 'react';
import useClickCounter from '@/hooks/useClickCounter';
import styles from './useClickCounterPage.module.css'; 

function ContadorDeCliques() {
    const [count, increment] = useClickCounter();

    return (
        <div className={styles.container}>
            <p className={styles.counterText}>Você clicou {count} vezes</p>
            <button className={styles.counterButton} onClick={increment}>Clique aqui</button>
        </div>
    );
}

export default ContadorDeCliques;
