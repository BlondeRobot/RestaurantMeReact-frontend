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
        <div className="fixed top-0 justify-between h-16 bg-white shadow flex inset-x-0">
          <div className='flex flex-col pl-20 items-center justify-center w-5/6'>
            <span className="border-b-solid border-b-2 border-b-slate-200">{user && `${user.name}'s`}</span>
            <span>RestaurantMe</span>
          </div>
          <div className="w-1/6 flex items-center justify-center">
            <button onClick={logOutUser}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
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
