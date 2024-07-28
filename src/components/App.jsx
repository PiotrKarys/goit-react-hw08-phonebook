import React, { useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "../hooks/useAuth";
import { Box, Spinner } from "@chakra-ui/react";
import Notiflix from "notiflix";

Notiflix.Notify.init({
  width: "280px",
  position: "center-top",
  distance: "20px",
  opacity: 1,
  timeout: 1500,
  clickToClose: true,
  pauseOnHover: true,
});
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));
const Contacts = lazy(() => import("../pages/Contacts/Contacts"));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        bgGradient="linear(to-r, teal.300, blue.500)">
        <Spinner size="xl" color="white" />
      </Box>
    );
  }

  return (
    <Box
      minHeight="100vh"
      bgGradient="linear(to-r, teal.300, blue.500)"
      p={0}
      m={0}>
      <Suspense
        fallback={
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            bgGradient="linear(to-r, teal.300, blue.500)">
            <Spinner size="xl" color="white" />
          </Box>
        }>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </Box>
  );
};

export default App;
