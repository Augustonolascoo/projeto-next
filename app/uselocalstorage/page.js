"use client";

import React from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

function ComponenteLocalStorage() {
    const [name, setName] = useLocalStorage('name', '');

      return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"
            />
            <p>Nome armazenado: {name}</p>
        </div>
      );
}

export default ComponenteLocalStorage;