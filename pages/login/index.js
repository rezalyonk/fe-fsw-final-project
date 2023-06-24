import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    // Periksa status login dan accessToken saat halaman dimuat
    const storedAccessToken = localStorage.getItem('accessToken');

    if (storedAccessToken) {
      setLoggedIn(true);
      setAccessToken(storedAccessToken);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      const { data } = response;
      console.log(data)
      if (data.message === 'Login berhasil') {
        // Simpan status login dan accessToken di localStorage
        localStorage.setItem('accessToken', data.accessToken);
        setLoggedIn(true);
        setAccessToken(data.accessToken);
        console.log(setAccessToken)
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage('Terjadi kesalahan saat login');
    }
  };

  const handleLogout = () => {
    const accessToken = localStorage.getItem('accessToken');
  console.log(accessToken); // Periksa nilai accessToken sebelum dihapus
    // Hapus status login dan accessToken dari localStorage saat logout
    localStorage.removeItem('accessToken');
    setLoggedIn(false);
    setAccessToken('');
  };


  return (
    <div>
      {loggedIn ? (
        <div>
          <p>Logged in</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          {message && <p>{message}</p>}
        </form>
      )}
    </div>
  );
}
