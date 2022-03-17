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
      className="LoginPage h-screen flex flex-col items-end "
      style={{ backgroundImage: `url(/images/restaurant/bg1.png)` }}
    >
      <h1 className="pt-20 font-bold">Log In</h1>
      <div className="w-2/3 flex justify-end">
        <form className="flex flex-col items-center" onSubmit={handleLoginSubmit}>
          <div className="flex w-full py-2">
            <label className="pt-2 pb-1 font-bold">Email:</label>
            <input
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="flex w-full py-2">
            <label className="pt-2 pb-1 font-bold">Password:</label>
            <input
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="w-full py-2 flex justify-end">
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold flex flex-col items-center py-1 px-4 w-3/5 border border-gray-400 rounded shadow"
              type="submit"
            >
              <span className="font-bold">Log In</span>
            </button>
          </div>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <p className="pt-4">Dont have an account yet?</p>
      <Link to={'/signup'}> Sign Up</Link>
    </div>
  );
}

export default LoginPage;
