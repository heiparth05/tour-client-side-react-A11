import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import BookNow from "./Components/BookNow/BookNow";
import Error from "./Components/Error/Error";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar/Navbar";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import Resorts from "./Components/Resorts/Resorts";
import AuthProvider from "./Components/UseFirebase/AuthProvider";
import PrivateRoute from "./Components/UseFirebase/PrivateRoute";

function App() {
  // const isLoggedIn = true;
  return (
    <>
      <div>
        <AuthProvider>
          <Router>
            <Navbar></Navbar>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <LogIn></LogIn>
              </Route>
              <PrivateRoute path="/bookNow">
                <BookNow></BookNow>
              </PrivateRoute>

              <PrivateRoute path="/resort">
                <Resorts></Resorts>
              </PrivateRoute>

              <Route exact path="*">
                <Error></Error>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
