// pages/contato.js
'use client'
import { useState } from 'react';
import styles from '@/app/contato/contato.module.css'

export default function Contato() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para envio de formulário
    setSubmitted(true);
    // Aqui você pode adicionar lógica para enviar os dados do formulário, como uma chamada à API
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contato</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className={styles.botao} type="submit">Enviar</button>
      </form>
      {submitted && <p className={styles.successMessage}>Mensagem enviada com sucesso!</p>}
    </div>
  );
}
