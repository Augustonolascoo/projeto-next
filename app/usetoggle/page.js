"use client";

import React from 'react';
import useToggle from '@/hooks/useToggle';
import styles from './ComponenteToggle.module.css';

function ComponenteToggle() {
    const [isVisible, toggleVisibility] = useToggle();

    return (
        <div>
            <button className={styles.button} onClick={toggleVisibility}>
                {isVisible ? 'Esconder' : 'Mostrar'} Texto
            </button>
            {isVisible && <p>Welker?!</p>}
        </div>
    );
}

export default ComponenteToggle;
