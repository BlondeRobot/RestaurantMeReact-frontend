import { useState, useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  const handleLoginSubmit = e => {
    e.preventDefault();
    const requestBody = { email, password };

    login(requestBody)
      .then(() => {
        navigate('/restaurants');
      })
      .catch(error => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div
      className="LoginPage h-screen bg-red-200"
      style={{ backgroundImage: `url(process.env.PUBLIC_URL + '/images/restaurant/restaurant1.png')` }}
    >
      <h1>Login</h1>

      <form className="flex flex-col items-center" onSubmit={handleLoginSubmit}>
        <div className="flex w-full py-1">
          <label>Email:</label>
          <input
            className="w-full bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="flex w-full py-1">
          <label>Password:</label>
          <input
            className="w-full bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold flex flex-col items-center py-2 px-4 w-1/2 border border-gray-400 rounded shadow"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          <span>Login</span>
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Dont have an account yet?</p>
      <Link to={'/signup'}> Sign Up</Link>
    </div>
  );
}

export default LoginPage;
