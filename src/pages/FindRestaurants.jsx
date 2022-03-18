import { useState } from 'react';
import apiService from '../services/api.service';
import config from '../config/config';
import FoundRestaurants from './FoundRestaurants';

function FindRestaurants() {
  const [foundRestaurants, setFoundRestaurants] = useState([]);

  const [search, setSearch] = useState({
    name: '',
    priority: '',
    cuisine: '',
    neighborhood: '',
    budget: '',
    ambience: '',
    veganMenu: '',
    glutenFree: '',
    notes: '',
  });

  const handleSearch = e => {
    setSearch(previous => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    apiService
      .findRestaurants(search)
      .then(response => {
        setFoundRestaurants(response.data);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="mt-16">
      <div style={{ backgroundImage: `url(/images/restaurant/bg1.png)` }}>
        <h1 className='font-bold pt-2'>Select Your Search Criteria</h1>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex w-full py-1">
            <label className="font-bold pt-2 pb-1">Name</label>
            <input
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="name"
              value={search.name}
              onChange={handleSearch}
            />
          </div>
          <div className="flex w-full py-1">
            <label className="font-bold py-1">Priority</label>
            <select
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="priority"
              value={search.priority}
              onChange={handleSearch}
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
            <label className="font-bold py-1">Cuisine</label>
            <select
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="cuisine"
              value={search.cuisine}
              onChange={handleSearch}
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
            <label className="font-bold py-1">Neighborhood</label>
            <select
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="neighborhood"
              value={search.neighborhood}
              onChange={handleSearch}
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
            <label className="font-bold py-1">Budget</label>
            <select
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="budget"
              value={search.budget}
              onChange={handleSearch}
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
            <label className="font-bold py-1">Ambience</label>
            <select
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="ambience"
              value={search.ambience}
              onChange={handleSearch}
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
            <label className="font-bold py-1">Vegan Menu</label>
            <select
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="veganMenu"
              value={search.veganMenu}
              onChange={handleSearch}
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
            <label className="font-bold py-1">Gluten Free</label>
            <select
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="glutenFree"
              value={search.glutenFree}
              onChange={handleSearch}
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
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold my-2 py-2 px-4 w-1/2 border border-gray-400 rounded shadow"
            type="submit"
          >
            Find Restaurants
          </button>
        </form>
      </div>
      <FoundRestaurants foundRestaurants={foundRestaurants} />
    </div>
  );
}

export default FindRestaurants;
