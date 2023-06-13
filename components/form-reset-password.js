import styles from "./form-reset-password.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormResetPassword = () => {
  const [resetToken, setResetToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);

  const router = useRouter();

  const handleResetTokenChange = (e) => {
    setResetToken(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleVerifyPasswordChange = (e) => {
    setVerifyPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleShowVerifyPassword = () => {
    setShowVerifyPassword((prevShowVerifyPassword) => !prevShowVerifyPassword);
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
        resetToken,
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
    <form className={styles.frameParent} onSubmit={handleSubmit}>
      <div className={styles.logoWrapper}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </div>
      <div className={styles.framteksreset}>
        <b className={styles.resetPassword}>Reset Password</b>
      </div>
      <div className={styles.inner}>
        <div className={styles.input}>
          <div className={styles.masukkanToken}>Masukkan Token</div>
          <input
            className={styles.inputChild}
            id="resetToken"
            value={resetToken}
            onChange={handleResetTokenChange}
            required
            type="text"
            placeholder="Masukkan Token"
          />
        </div>
        <div className={styles.input}>
          <div className={styles.masukkanToken}>Masukkan Password Baru</div>
          <div className={styles.masukkanPasswordBaruParent}>
            <input
              className={styles.masukkanPassword}
              placeholder="Masukkan Password Baru"
              type={showPassword ? "text" : "password"}
              id="newPassword"
              value={newPassword}
              onChange={handleNewPasswordChange}
              required
            />
            <button onClick={toggleShowPassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.framteksreset}>
            <div className={styles.ulangiPasswordBaru}>
              Ulangi Password Baru
            </div>
          </div>
          <div className={styles.masukkanPasswordParent}>
            <input
              className={styles.masukkanPassword}
              type={showVerifyPassword ? "text" : "password"}
              id="verifyPassword"
              value={verifyPassword}
              onChange={handleVerifyPasswordChange}
              required
              placeholder="Masukkan password"
            />
            <button onClick={toggleShowVerifyPassword}>
              {showVerifyPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.button} type="submit">
            <div className={styles.terbitkan}>Simpan</div>
            <img className={styles.fiheartIcon} alt="" src="/fiheart.svg" />
          </button>
        </div>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
    
  );
};

export default FormResetPassword;