// import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      {isLoggedIn && (
        <div className="fixed top-0 justify-between h-16 bg-white shadow flex inset-x-0">
          <div className="flex flex-col pl-20 items-center justify-center w-5/6">
            <span className="border-b-solid border-b-2 border-b-slate-200">{user && `${user.name}'s`}</span>
            <span>RestaurantMe</span>
          </div>
          <div className="w-1/6 flex items-center justify-center">
            <button onClick={logOutUser}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* {!isLoggedIn && (
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
      )} */}
    </nav>
  );
}

export default Navbar;
