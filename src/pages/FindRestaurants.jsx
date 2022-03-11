import { useState } from 'react';
import apiService from '../services/api.service';
import config from '../config/config';
import FoundRestaurants from './FoundRestaurants';

function FindRestaurants() {

  const [foundRestaurants, setFoundRestaurants] = useState([])

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
  })


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
        setFoundRestaurants(response.data)
      })
      .catch(error => console.log(error));
  };
  
  return (
    <div>
      <h1>Find Restaurants That Match Your Search Criteria</h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <label className="pt-2 pb-1">
          Name
          <input
            className="bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
            type="text"
            name="name"
            value={search.name}
            onChange={handleSearch}
          />
        </label>
        <label className="py-1">
          Priority
          <select
            className="bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
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
        </label>
        <label className="py-1">
          Cuisine
          <select
            className="bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
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
        </label>
        <label className="py-1">
          Neighborhood
          <select
            className="bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
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
        </label>
        <label className="py-1">
          Budget
          <select
            className="bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
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
        </label>
        <label className="py-1">
          Ambience
          <select
            className="bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
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
        </label>
        <label className="py-1">
          Vegan Menu
          <select
            className="bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
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
        </label>
        <label className="py-1">
          Gluten Free
          <select
            className="bg-gray-200 ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
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
        </label>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 w-1/2 border border-gray-400 rounded shadow"
          type="submit"
        >
          Find A Restaurant
        </button>
      </form>
      <FoundRestaurants foundRestaurants={foundRestaurants} />
    </div>
  );
}

export default FindRestaurants;
