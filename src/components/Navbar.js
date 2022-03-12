import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    // <nav fixed top-0 left-0 right-0 h-45 pb-10>
    <nav>
      {isLoggedIn && (
        <div className="bg-white justify-between shadow-inner flex">
          <div>
            <span>{user && user.name}</span>
          </div>
          <div>
            <button onClick={logOutUser}>Logout</button>
          </div>
        </div>
      )}

      {!isLoggedIn && (
        <div className="bg-slate-400">
          <Link to="/signup">
            {' '}
            <button>Sign Up</button>{' '}
          </Link>
          <Link to="/login">
            {' '}
            <button>Login</button>{' '}
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
