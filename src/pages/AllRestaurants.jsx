import { useState, useEffect } from 'react';
import apiService from '../services/api.service';
import { Link } from 'react-router-dom';

function AllRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const getAllRestaurants = async () => {
      try {
        const response = await apiService.getRestaurants();
        setRestaurants(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllRestaurants();
  }, []);

  return (
    <div className="mb-20 mt-20">
      {restaurants.map(restaurant => {
        let images = [
          process.env.PUBLIC_URL + '/images/restaurant/restaurant1.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant2.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant3.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant4.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant5.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant6.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant7.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant8.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant9.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant10.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant11.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant12.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant13.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant14.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant15.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant16.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant17.png',
          process.env.PUBLIC_URL + '/images/restaurant/restaurant18.png',
          process.env.PUBLIC_URL + '/images/restaurant/default-restaurant.png',
        ];
        let src = images[Math.floor(Math.random() * images.length)];
        return (
          <div className="border-b-solid border-b-1 border-b-slate-200" key={restaurant._id}>
            <Link to={`/restaurants/${restaurant._id}`}>
              <h3 className="font-bold text-slate-600 my-4">{restaurant.name}</h3>
              <img src={src} />
              {/* <div className="flex flex-row justify-between py-2">
                <div className="w-1/2 flex flex-col items-end pr-4 border-r-solid border-r-2 border-r-slate-200">
                  <p>
                    <span className="font-bold">Priority:</span> {restaurant.priority}
                  </p>
                  <p>
                    <span className="font-bold">Cuisine:</span> {restaurant.cuisine}
                  </p>
                </div>
                <div className="w-1/2 flex flex-col pl-4">
                  <p>
                    <span className="font-bold">Neighborhood:</span> {restaurant.neighborhood}
                  </p>
                  <p className="mb-4">
                    <span className="font-bold">Budget:</span> {restaurant.budget}
                  </p>
                </div>
              </div> */}

              <div className="py-4 border-b-solid border-b-2 border-b-gray-400">
                <div className='mb-1'>
                  <span className="font-bold">Priority: </span> {restaurant.priority} <span> </span>
                  <span className="font-bold">Cuisine: </span> {restaurant.cuisine} <span> </span>
                </div>
                <div>
                  <span className="font-bold">Neighborhood: </span> {restaurant.neighborhood} <span> </span>
                  <span className="font-bold">Budget: </span> {restaurant.budget}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllRestaurants;
