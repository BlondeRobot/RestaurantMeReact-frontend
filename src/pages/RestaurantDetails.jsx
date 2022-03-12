import { useState, useEffect } from 'react';
import apiService from '../services/api.service';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function RestaurantDetails() {

  const {id} = useParams();
  const [restaurant, setRestaurant] = useState([])
  const navigate = useNavigate(); 

    useEffect(() => {
      const getRestaurantDetails = async () => {
        try {
          const response = await apiService.getRestaurantDetails(id);
          console.log('response.data', response.data);
          setRestaurant(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getRestaurantDetails();
    }, []);

  const handleDelete = async () => {
    try {
      await apiService.deleteRestaurant(id);
      navigate('/restaurants');
    } catch (error) {
      console.log(error);
    }

  }  

  return (
    <div>
      <h1>See Your Restaurants Details</h1>
      <img src={restaurant.image} />
      <h3>{restaurant.name}</h3>
      <p>Priority: {restaurant.priority}</p>
      <p>Cuisine: {restaurant.cuisine}</p>
      <p>Neighborhood: {restaurant.neighborhood}</p>
      <p>Budget: {restaurant.budget}</p>
      <p>Ambience: {restaurant.ambience}</p>
      <p>Vegan Menu: {restaurant.veganMenu}</p>
      <p>Gluten Free: {restaurant.glutenFree}</p>
      <p>Notes: {restaurant.notes}</p>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 w-1/2 border border-gray-400 rounded shadow"
        onClick={handleDelete}
      >
        Delete This Restaurant
      </button>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 w-1/2 border border-gray-400 rounded shadow">
        <Link to={`/restaurants/${id}/update`}>Edit This Restaurant</Link>
      </button>
    </div>
  );
}

export default RestaurantDetails;
