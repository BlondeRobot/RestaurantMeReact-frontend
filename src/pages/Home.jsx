

function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Welcome To RestaurantMe Home</h1>
      <img src={process.env.PUBLIC_URL + '/images/restaurant/default-restaurant.png'} />
    </div>
  );
}

export default Home;
