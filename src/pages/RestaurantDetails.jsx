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
    <div className="mt-24">
      <div className="w-full mb-6 border-double border-4 border-gray-500 rounded flex flex-col items-center align-middle">
        <h1 className="font-bold  text-slate-600">{restaurant.name}</h1>
      </div>
      <img className="mb-6" src={restaurant.image} />
      <p>
        <span className="font-bold">Priority</span>: {restaurant.priority}
      </p>
      <p>
        <span className="font-bold">Cuisine</span>: {restaurant.cuisine}
      </p>
      <p>
        <span className="font-bold">Neighborhood</span>: {restaurant.neighborhood}
      </p>
      <p>
        <span className="font-bold">Budget</span>: {restaurant.budget}
      </p>
      <p>
        <span className="font-bold">Ambience</span>: {restaurant.ambience}
      </p>
      <p>
        <span className="font-bold">Vegan Menu</span>: {restaurant.veganMenu}
      </p>
      <p>
        <span className="font-bold">Gluten Free</span>: {restaurant.glutenFree}
      </p>
      <p className="mb-6">
        <span className="font-bold">Notes</span>: {restaurant.notes}
      </p>
      <div className="flex flex-row">
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold flex flex-col items-center py-2 px-4 w-1/2 border border-gray-400 rounded shadow"
          onClick={handleDelete}
        >
          <span>Delete</span>
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold flex flex-col items-center py-2 px-4 w-1/2 border border-gray-400 rounded shadow">
          <Link to={`/restaurants/${id}/update`}>Edit </Link>
        </button>
      </div>
    </div>
  );
}

export default RestaurantDetails;
