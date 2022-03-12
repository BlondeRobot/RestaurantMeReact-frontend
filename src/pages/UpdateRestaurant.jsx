import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../services/api.service';
import config from '../config/config';

function UpdateRestaurant() {
   const { id } = useParams();
   const [restaurant, setRestaurant] = useState({
     name: '',
     priority: 'TBE',
     cuisine: 'TBE',
     neighborhood: 'TBE',
     budget: 'TBE',
     ambience: 'TBE',
     veganMenu: 'TBE',
     glutenFree: 'TBE',
     notes: 'TBE',
   });
  const navigate = useNavigate(); 

  const getRestaurantById = async () => {
    const response = await apiService.getRestaurantDetails(id)
    setRestaurant(response.data)
  }

  useEffect(() => {
    getRestaurantById();
  }, []);

  const handleOnChange = e => {
    setRestaurant(previous => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  }; 

  const handleSubmit = e => {
    e.preventDefault();
    apiService
      .updateRestaurant(restaurant._id, {
        name: restaurant.name,
        priority: restaurant.priority,
        cuisine: restaurant.cuisine,
        neighborhood: restaurant.neighborhood,
        budget: restaurant.budget,
        ambience: restaurant.ambience,
        veganMenu: restaurant.veganMenu,
        glutenFree: restaurant.glutenFree,
        notes: restaurant.notes
      })
      .then(response => {
        console.log(response);
        navigate('/restaurants');
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Update Your Restaurant</h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="flex w-full py-1">
          <label className="pt-2 pb-1">Name</label>
          <input
            className="w-full bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
            type="text"
            name="name"
            value={restaurant.name}
            onChange={handleOnChange}
          />
        </div>
        <div className="flex w-full py-1">
          <label>Priority</label>
          <select
            className="w-full bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
            name="priority"
            value={restaurant.priority}
            onChange={handleOnChange}
          >
            {config.priority.map(option => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex w-full py-1">
          <label>Cuisine</label>
          <select
            className="w-full bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
            name="cuisine"
            value={restaurant.cuisine}
            onChange={handleOnChange}
          >
            {config.cuisine.map(option => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex w-full py-1">
          <label>Neighborhood</label>
          <select
            className="w-full bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
            name="neighborhood"
            value={restaurant.neighborhood}
            onChange={handleOnChange}
          >
            {config.neighborhood.map(option => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex w-full py-1">
          <label>Budget</label>
          <select
            className="w-full bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
            name="budget"
            value={restaurant.budget}
            onChange={handleOnChange}
          >
            {config.budget.map(option => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex w-full py-1">
          <label>Ambience</label>
          <select
            className="w-full bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
            name="ambience"
            value={restaurant.ambience}
            onChange={handleOnChange}
          >
            {config.ambience.map(option => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex w-full py-1">
          <label>Vegan Menu</label>
          <select
            className="w-full bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
            name="veganMenu"
            value={restaurant.veganMenu}
            onChange={handleOnChange}
          >
            {config.veganMenu.map(option => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex w-full py-1">
          <label>Gluten Free</label>
          <select
            className="w-full bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
            name="glutenFree"
            value={restaurant.glutenFree}
            onChange={handleOnChange}
          >
            {config.glutenFree.map(option => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex w-full py-1">
          <label>Notes</label>
          <input
            className="w-full bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
            type="text"
            name="notes"
            value={restaurant.notes}
            onChange={handleOnChange}
          />
        </div>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 w-1/2 border border-gray-400 rounded shadow"
          type="submit"
        >
          Update Your Restaurant
        </button>
      </form>
    </div>
  );
}

export default UpdateRestaurant;
