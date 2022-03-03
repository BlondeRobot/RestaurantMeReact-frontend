import { Route, Routes } from 'react-router-dom';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import Navbar from './components/Navbar';
import { AuthProviderWrapper } from './context/auth.context';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Protected from './pages/Protected';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <AuthProviderWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/protected"
          element={
            <IsPrivate>
              <Protected />
            </IsPrivate>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/restaurants"
          element={
            <IsPrivate>
              <AllRestaurants />
            </IsPrivate>
          }
        />
        <Route
          path="/restaurants/find"
          element={
            <IsPrivate>
              <FindRestaurants />
            </IsPrivate>
          }
        />
        <Route
          path="/restaurants/add"
          element={
            <IsPrivate>
              <AddRestaurant />
            </IsPrivate>
          }
        />
        <Route
          path="/restaurants/:id"
          element={
            <IsPrivate>
              <RestaurantDetails />
            </IsPrivate>
          }
        />
        <Route
          path="/restaurants/:id/update"
          element={
            <IsPrivate>
              <UpdateRestaurant />
            </IsPrivate>
          }
        />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </AuthProviderWrapper>
  );
}

export default App;
