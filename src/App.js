import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddTour from './components/AddTour/AddTour';
import AllOrders from './components/AllOrders/AllOrders';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PopularDestination from './components/Home/PopularDestination';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound'
import SignUp from './components/SignUp/SignUp';
import Tours from './components/Tours/Tours';
import TourDetails from './components/ToursDetails/TourDetails';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/tours">
              <Tours />
            </Route>
            <Route exact path="/destinations">
              <PopularDestination />
            </Route>
            <PrivateRoute path="/tour/:id">
              <TourDetails />
            </PrivateRoute>
            <PrivateRoute path="/add-new-tour">
              <AddTour />
            </PrivateRoute>
            <PrivateRoute path="/my-orders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/all-orders">
              <AllOrders />
            </PrivateRoute>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
