import React, { useState } from 'react';
import styles from "./index.module.css";

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman data kontak ke API atau pengiriman email
    setTimeout(() => {
      // Reset form setelah pengiriman selesai
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
      alert('Pesan telah terkirim!');
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Service</h1>
      <p className={styles.subtitle}>Kami percaya bahwa setiap pesan berharga. Jadi, jangan ragu untuk mengirimkan pesan Anda melalui formulir kontak ini. Kami berkomitmen untuk memberikan respon terbaik kepada Anda.</p>
      <form onSubmit={handleSubmit} className={styles.contactform}>
        <div className={styles.formgroup}>
          <label htmlFor={styles.name} className={styles.formlabel}>Nama:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.forminput}
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="email" className={styles.formlabel}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.forminput}
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="message" className={styles.formlabel}>Pesan:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={styles.forminput}
          />
        </div>
        <button type="submit" disabled={isSubmitting} className={styles.submitbutton}>
          {isSubmitting ? 'Mengirim...' : 'Kirim'}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
