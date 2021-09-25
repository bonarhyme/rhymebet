import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import loadable from "@loadable/component";

import { USER_LOGOUT } from "./constants/userConstants";

// import PageNotFoundScreen from "./screens/PageNotFound";
// import HomeScreen from "./screens/Home";
// import RegisterScreen from "./screens/RegisterScreen";
// import VerifyScreen from "./screens/Verification";
// import LoginScreen from "./screens/Login";

const LoginScreen = loadable(() => import("./screens/Login"));
const VerifyScreen = loadable(() => import("./screens/Verification"));
const RegisterScreen = loadable(() => import("./screens/RegisterScreen"));
const HomeScreen = loadable(() => import("./screens/Home"));
const PageNotFoundScreen = loadable(() => import("./screens/PageNotFound"));

// import ForgotPasswordScreen from "./screens/ForgotPassword";
// import ResetPasswordScreen from "./screens/ResetPassword";
// import ProfileScreen from "./screens/Profile";
// import AdminGamesScreen from "./screens/AdminGames";
// import SubscriptionsScreen from "./screens/Subscriptions";
// import UsersScreen from "./screens/Users";

// import UserDashboardScreen from "./screens/UserDashboard";

// import SuperAdminUser from "./screens/superAdmin/User";

const SuperAdminUser = loadable(() => import("./screens/superAdmin/User"));
const UserDashboardScreen = loadable(() => import("./screens/UserDashboard"));
const UsersScreen = loadable(() => import("./screens/Users"));
const SubscriptionsScreen = loadable(() => import("./screens/Subscriptions"));
const AdminGamesScreen = loadable(() => import("./screens/AdminGames"));
const ProfileScreen = loadable(() => import("./screens/Profile"));
const ResetPasswordScreen = loadable(() => import("./screens/ResetPassword"));
const ForgotPasswordScreen = loadable(() => import("./screens/ForgotPassword"));

// import MyNavbar from "./components/MyNavbar";
// import MyFooter from "./components/MyFooter";
// import { checkToken, getUserProfile } from "./actions/userActions";
// import CreateGameScreen from "./screens/CreateGame";
// import Testie from "./components/subscriptions/Testie";
// import Noob from "./components/subscriptions/Noob";
// import Basic from "./components/subscriptions/Basic";
// import Standard from "./components/subscriptions/Standard";
// import Gold from "./components/subscriptions/Gold";

const Gold = loadable(() => import("./components/subscriptions/Gold"));
const Standard = loadable(() => import("./components/subscriptions/Standard"));
const Basic = loadable(() => import("./components/subscriptions/Basic"));
const Noob = loadable(() => import("./components/subscriptions/Noob"));
const Testie = loadable(() => import("./components/subscriptions/Testie"));
const CreateGameScreen = loadable(() => import("./screens/CreateGame"));
const { checkToken, getUserProfile } = loadable(() =>
  import("./actions/userActions")
);
const MyFooter = loadable(() => import("./components/MyFooter"));
const MyNavbar = loadable(() => import("./components/MyNavbar"));

// import BuyGamesScreen from "./screens/BuyGamesScreen";
// import { getActiveSingleSub } from "./actions/subscriptionActions";
// import SendVerificationAgain from "./screens/SendVerificationAgain";
// import AdminNewsScreen from "./screens/AdminNews";

const AdminNewsScreen = loadable(() => import("./screens/AdminNews"));
const SendVerificationAgain = loadable(() =>
  import("./screens/SendVerificationAgain")
);
const { getActiveSingleSub } = loadable(() =>
  import("./actions/subscriptionActions")
);
const BuyGamesScreen = loadable(() => import("./screens/BuyGamesScreen"));

// import CreateNews from "./components/news/CreateNews";
// import AllNews from "./screens/News";
// import SingleNews from "./screens/SingleNews";

// import AboutScreen from "./screens/discover/About";
// import DisclaimerScreen from "./screens/discover/Disclaimer";
// import TermsScreen from "./screens/discover/Terms";
// import Faq from "./screens/discover/Faq";
// import Contact from "./screens/Contact";

const Contact = loadable(() => import("./screens/Contact"));
const Faq = loadable(() => import("./screens/discover/Faq"));
const TermsScreen = loadable(() => import("./screens/discover/Terms"));
const DisclaimerScreen = loadable(() =>
  import("./screens/discover/Disclaimer")
);
const AboutScreen = loadable(() => import("./screens/discover/About"));
const SingleNews = loadable(() => import("./screens/SingleNews"));
const AllNews = loadable(() => import("./screens/News"));
const CreateNews = loadable(() => import("./components/news/CreateNews"));

const App = () => {
  const dispatch = useDispatch();

  const tokenCheck = useSelector((state) => state.tokenCheck);
  const { error } = tokenCheck;

  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    let userInfoFromStorage = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    if (userInfoFromStorage !== null) {
      dispatch(checkToken(userInfoFromStorage));
    }
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      localStorage.clear();
      dispatch({ type: USER_LOGOUT });
      document.location.href = "/login";
    }
  }, [userInfo, error, dispatch]);

  useEffect(() => {
    if (userInfo) {
      dispatch(getActiveSingleSub());
      dispatch(getUserProfile());
    }
    // eslint-disable-next-line
  }, [userInfo]);

  return (
    <>
      <Router>
        <MyNavbar />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route
            path="/register"
            component={!userInfo ? RegisterScreen : HomeScreen}
            exact
          />
          <Route
            path="/verify"
            component={!userInfo ? VerifyScreen : HomeScreen}
            exact
          />
          <Route
            path="/send-verification-again"
            component={!userInfo ? SendVerificationAgain : HomeScreen}
            exact
          />
          <Route path="/login" component={LoginScreen} exact />

          <Route
            path="/forgot-password"
            component={!userInfo ? ForgotPasswordScreen : HomeScreen}
            exact
          />
          <Route
            path="/reset/password/:token"
            component={!userInfo ? ResetPasswordScreen : HomeScreen}
            exact
          />

          <Route path="/user/profile" component={ProfileScreen} exact />

          {userInfo && userInfo.isAdmin && (
            <Route
              path="/admin/games"
              component={
                userInfo && userInfo.isAdmin ? AdminGamesScreen : HomeScreen
              }
              exact
            />
          )}
          {userInfo && userInfo.isAdmin && (
            <Route
              path="/admin/games/create-game"
              component={
                userInfo && userInfo.isAdmin ? CreateGameScreen : HomeScreen
              }
              exact
            />
          )}
          {userInfo && userInfo.isAdmin && (
            <Route
              path="/admin/subscriptions"
              component={
                userInfo && userInfo.isAdmin ? SubscriptionsScreen : HomeScreen
              }
              exact
            />
          )}
          {userInfo && userInfo.isAdmin && (
            <Route path="/admin/users" component={UsersScreen} exact />
          )}
          {userInfo && userInfo.isSuperAdmin && (
            <Route path="/superadmin/users" component={SuperAdminUser} exact />
          )}

          <Route
            path="/user/dashboard"
            component={userInfo ? UserDashboardScreen : LoginScreen}
            exact
          />

          {userInfo && userInfo.isAdmin && (
            <Route path="/admin/news/" component={AdminNewsScreen} exact />
          )}

          {userInfo && userInfo.isAdmin && (
            <Route path="/admin/news/create" component={CreateNews} exact />
          )}

          <Route path="/sportsnews" component={AllNews} exact />

          <Route path="/sportsnews/:id" component={SingleNews} exact />

          <Route path="/subscription/testie" component={Testie} exact />
          <Route path="/subscription/noob" component={Noob} exact />
          <Route path="/subscription/basic" component={Basic} exact />
          <Route path="/subscription/standard" component={Standard} exact />
          <Route path="/subscription/gold" component={Gold} exact />
          <Route path="/subscriptions" component={BuyGamesScreen} exact />

          <Route path="/discover/about" component={AboutScreen} exact />
          <Route
            path="/discover/disclaimer"
            component={DisclaimerScreen}
            exact
          />
          <Route path="/discover/terms" component={TermsScreen} exact />
          <Route path="/discover/faq" component={Faq} exact />
          <Route path="/discover/contact" component={Contact} exact />
          <Route path="*" component={PageNotFoundScreen} />
        </Switch>
        <MyFooter />
      </Router>
    </>
  );
};

export default App;
