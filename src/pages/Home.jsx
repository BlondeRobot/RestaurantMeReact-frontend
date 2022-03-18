import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      style={{ backgroundImage: `url(/images/restaurant/bg1.png)`}}
    >
      <h1 className="mb-9 font-bold border-b-solid border-b-2 border-black">Welcome To RestaurantMe</h1>
      <div className="flex flex-row w-full">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold flex flex-col items-center py-2 px-4 w-1/2 border border-gray-400 rounded shadow">
          <Link to={`/signup`}>Signup</Link>
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold flex flex-col items-center py-2 px-4 w-1/2 border border-gray-400 rounded shadow">
          <Link to={`/login`}>Login </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
