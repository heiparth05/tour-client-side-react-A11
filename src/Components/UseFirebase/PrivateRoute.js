import React from "react";
import { Spinner } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import useAuth from "./UseAuth";
// import useAuth from "./UseAuth";

const PrivateRoute = (props) => {
  const { children, ...rest } = props;
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <center>
        <Spinner
          style={{ marginTop: "4%" }}
          animation="border"
          variant="danger"
        />
      </center>
    );
  }

  /* this is private route when someone login this website then he/she will be redirected other private route*/

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
