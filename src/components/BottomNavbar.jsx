import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';

function BottomNavbar() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <nav className="fixed bottom-0 left-0 w-full border-2 border-red-400 border-solid">
      asdf
      {isLoggedIn && (
        <div className="w-full h-screen flex items-center justify-between bg-red-400">
          <section className="w-full h-screen flex items-center justify-between bg-red-400">
            {/* <section className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> */}
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/restaurants" end>
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Restaurants
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/restaurants/add">
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
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Add
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/restaurants/find">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Find
            </NavLink>
          </section>
        </div>
      )}
    </nav>
  );
}

export default BottomNavbar;
