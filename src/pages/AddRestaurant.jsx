import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api.service';
import config from '../config/config';

function AddRestaurant() {
  const [form, setForm] = useState({
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

  const handleForm = e => {
    setForm(previous => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    apiService
      .addRestaurant(form)
      .then(response => {
        console.log(response);
        navigate('/restaurants');
      })
      .catch(error => console.log(error));
  };

  return (
    <div
      className="mt-16 h-screen flex flex-col items-end"
      style={{ backgroundImage: `url(/images/restaurant/bg1.png)` }}
    >
      <h1 className="font-bold">Add A Restaurant To Your Wishlist</h1>
      <div className="w-4/5 flex flex-col justify-end">
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex w-full py-1">
            <label className="font-bold">Name</label>
            <input
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
              type="text"
              name="name"
              value={form.name}
              onChange={handleForm}
            />
          </div>
          <div className="flex w-full py-1">
            <label className="font-bold">Priority</label>
            <select
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
              name="priority"
              value={form.priority}
              onChange={handleForm}
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
            <label className="font-bold">Cuisine</label>
            <select
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
              name="cuisine"
              value={form.cuisine}
              onChange={handleForm}
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
            <label className="font-bold">Neighborhood</label>
            <select
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
              name="neighborhood"
              value={form.neighborhood}
              onChange={handleForm}
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
            <label className="font-bold">Budget</label>
            <select
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
              name="budget"
              value={form.budget}
              onChange={handleForm}
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
            <label className="font-bold">Ambience</label>
            <select
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
              name="ambience"
              value={form.ambience}
              onChange={handleForm}
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
            <label className="font-bold">Vegan Menu</label>
            <select
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
              name="veganMenu"
              value={form.veganMenu}
              onChange={handleForm}
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
            <label className="font-bold">Gluten Free</label>
            <select
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
              name="glutenFree"
              value={form.glutenFree}
              onChange={handleForm}
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
            <label className="font-bold">Notes</label>
            <input
              className="w-full bg-white ml-4 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
              type="text"
              name="notes"
              value={form.notes}
              onChange={handleForm}
            />
          </div>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold my-1 py-2 px-4 w-1/2 border border-gray-400 rounded shadow"
            type="submit"
          >
            Add Restaurant
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRestaurant;
