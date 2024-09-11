"use client";

import React, { useState } from 'react';
import useDocumentTitle from '@/hooks/useDocumentTitle';

function ComponenteTitulo() {
    const [title, setTitle] = useState('Meu Título');
    useDocumentTitle(title);

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Digite o título da página"
            />
            <p>Título atual: {title}</p>
        </div>
    );
}

export default ComponenteTitulo;
