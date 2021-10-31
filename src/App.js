import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AddNewPack from "./Components/AddNewPackage/AddNewPack";
import BookNow from "./Components/BookNow/BookNow";
import Error from "./Components/Error/Error";
import Events from "./Components/Events/Events";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar/Navbar";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import ManageAllOrders from "./Components/ManageAllOrder/ManageAllOrders";
import MyOrder from "./Components/MyOrder/MyOrder";
import Resorts from "./Components/Resorts/Resorts";
import AuthProvider from "./Components/UseFirebase/AuthProvider";
import PrivateRoute from "./Components/UseFirebase/PrivateRoute";

function App() {
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
              <Route path="/manageAllOrder">
                <ManageAllOrders></ManageAllOrders>
              </Route>
              <Route path="/myOrder">
                <MyOrder></MyOrder>
              </Route>
              <Route path="/addNPack">
                <AddNewPack></AddNewPack>
              </Route>
              <Route path="/event">
                <Events></Events>
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
