import { Link } from 'react-router-dom';

function FoundRestaurants({ foundRestaurants }) {
  return (
    <div className="mb-20">
      {/* <h1>These restaurants match your search criteria</h1> */}
      {foundRestaurants.map(restaurant => {
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
          <div key={restaurant._id}>
            <Link to={`/restaurants/${restaurant._id}`}>
              <h3 className="font-bold py-2">{restaurant.name}</h3>
            </Link>
            <img src={src} />
            <div className="py-4 border-b-solid border-b-2 border-b-gray-400">
              <div className="mb-1">
                <span className="font-bold">Priority: </span> {restaurant.priority} <span> </span>
                <span className="font-bold">Cuisine: </span> {restaurant.cuisine} <span> </span>
              </div>
              <div>
                <span className="font-bold">Neighborhood: </span> {restaurant.neighborhood} <span> </span>
                <span className="font-bold">Budget: </span> {restaurant.budget}
              </div>
            </div>
            {/* <p>Priority: {restaurant.priority}</p>
            <p>Neighborhood: {restaurant.neighborhood}</p>
            <p>Budget: {restaurant.budget}</p> */}
          </div>
        );
      })}
    </div>
  );
}

export default FoundRestaurants;
