import styles from "./form-reset-password.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const FormResetPassword = () => {
  const [otp, setotp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleotpChange = (e) => {
    setotp(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleVerifyPasswordChange = (e) => {
    setVerifyPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the verification password matches the new password
    if (newPassword !== verifyPassword) {
      setErrorMessage("Verification password must match the new password");
      return;
    }

    try {
      // Make a POST request to the reset password API endpoint
      const response = await axios.post("/api/reset-password", {
        otp,
        newPassword,
      });

      // Display success message
      setErrorMessage("Password successfully updated");
      // Redirect to the login page or display a success message
      router.push("/login");
    } catch (error) {
      console.error(error);
      // Handle error
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <form className={styles.inner} onSubmit={handleSubmit}>
      <div className={styles.form}>
        <div className={styles.token}>Kode OTP</div>
        <input
          className={styles.input}
          id="otp"
          value={otp}
          onChange={handleotpChange}
          required
          type="text"
          placeholder="Masukkan kode OTP"
        />
      </div>
      <div className={styles.form}>
        <div className={styles.token}>Masukkan Password Baru</div>
        <input
          className={styles.input1}
          placeholder="********"
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={handleNewPasswordChange}
          required
        />
      </div>
      <div className={styles.form}>
        <div className={styles.token}>Ulangi Password Baru</div>
        <input
          className={styles.input1}
          type="password"
          placeholder="********"
          id="verifyPassword"
          value={verifyPassword}
          onChange={handleVerifyPasswordChange}
          required
        />
      </div>
      <div className={styles.buttonWrapper} type="submit">
        <button className={styles.button}>
          <div className={styles.terbitkan}>Simpan</div>
        </button>
      </div>
    </form>
  );
};

export default FormResetPassword;
