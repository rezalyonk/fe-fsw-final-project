import styles from "./form-lupa-password.module.css";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const FromLupaPassword = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the forgot password API endpoint
      const response = await axios.post('/api/lupa-password', { email });

      // Display success message
      setSuccessMessage(response.data.message);
      setErrorMessage('');
      setEmail('');

    } catch (error) {
      console.error(error);
      // Handle error
      setSuccessMessage('');
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  useEffect(() => {
    if (successMessage) {
      // Redirect to reset password page after successful email sent
      router.push('/lupa-password/reset-password');
    }
  }, [successMessage]);

  return (
    <form className={styles.forminput}onSubmit={handleSubmit}>
      <div className={styles.inputemail}>
        <b className={styles.masukkanEmail}>Masukkan email</b>
      </div>
      <div className={styles.inner}>
        <div className={styles.form}>
          <div className={styles.email}>Email</div>
          <input
            className={styles.input}
            id="email"
            value={email}
            onChange={handleEmailChange} required
            type="email"
             placeholder="Contoh: johndoe@gmail.com"
          />
        </div>
        <div className={styles.buttonWrapper} type="submit">
          <button className={styles.button}>
            <div className={styles.terbitkan}>Kirim</div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default FromLupaPassword;
