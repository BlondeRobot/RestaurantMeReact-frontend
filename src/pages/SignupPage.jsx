import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { signup } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const handleName = e => setName(e.target.value);

  const handleSignupSubmit = e => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state``
    signup(requestBody)
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage pt-20 h-screen bg-purple-300 flex flex-col items-end">
      <h1>Sign Up</h1>

      <div className="w-2/3 flex justify-end bg-white">
        <form className="flex flex-col items-center" onSubmit={handleSignupSubmit}>
          <div className="flex w-full py-1">
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={handleEmail} />
          </div>
          <div className="flex w-full py-1">
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={handlePassword} />
          </div>
          <div className="flex w-full py-1">
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={handleName} />
          </div>
          <div className="w-full flex justify-end">
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 w-1/2 border border-gray-400 rounded shadow"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have an account?</p>
      <Link to={'/login'}> Log In</Link>
    </div>
  );
}

export default SignupPage;
