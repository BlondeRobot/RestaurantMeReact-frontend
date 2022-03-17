import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      style={{ backgroundImage: `url(process.env.PUBLIC_URL + '/images/restaurant/restaurant1.png')`}}
    >
      <h1 className="border-b-solid border-b-2 border-b-slate-700">Welcome To RestaurantMe</h1>
      <img className='mt-2' src={process.env.PUBLIC_URL + '/images/restaurant/default-restaurant.png'} />
      <div className="flex flex-row w-full">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold flex flex-col items-center py-2 px-4 w-1/2 border border-gray-400 rounded shadow">
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
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <Link to={`/signup`}>Signup</Link>
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold flex flex-col items-center py-2 px-4 w-1/2 border border-gray-400 rounded shadow">
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
          <Link to={`/login`}>Login </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
