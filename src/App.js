import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { USER_LOGOUT } from "./constants/userConstants";
import { checkToken, getUserProfile } from "./actions/userActions";
import { getActiveSingleSub } from "./actions/subscriptionActions";

import HomeScreen from "./screens/Home";
import MyNavbar from "./components/MyNavbar";

const tawkTo = lazy(() => import("tawkto-react"));

const LoginScreen = lazy(() => import("./screens/Login"));
const VerifyScreen = lazy(() => import("./screens/Verification"));
const RegisterScreen = lazy(() => import("./screens/RegisterScreen"));
const PageNotFoundScreen = lazy(() => import("./screens/PageNotFound"));

const SuperAdminUser = lazy(() => import("./screens/superAdmin/User"));
const UserDashboardScreen = lazy(() => import("./screens/UserDashboard"));
const UsersScreen = lazy(() => import("./screens/Users"));
const SubscriptionsScreen = lazy(() => import("./screens/Subscriptions"));
const AdminGamesScreen = lazy(() => import("./screens/AdminGames"));
const ProfileScreen = lazy(() => import("./screens/Profile"));
const ResetPasswordScreen = lazy(() => import("./screens/ResetPassword"));
const ForgotPasswordScreen = lazy(() => import("./screens/ForgotPassword"));

const Gold = lazy(() => import("./components/subscriptions/Gold"));
const Standard = lazy(() => import("./components/subscriptions/Standard"));
const Basic = lazy(() => import("./components/subscriptions/Basic"));
const Noob = lazy(() => import("./components/subscriptions/Noob"));
const Testie = lazy(() => import("./components/subscriptions/Testie"));

const MyFooter = lazy(() => import("./components/MyFooter"));
const CreateGameScreen = lazy(() => import("./screens/CreateGame"));
const BuyGamesScreen = lazy(() => import("./screens/BuyGamesScreen"));
const AdminNewsScreen = lazy(() => import("./screens/AdminNews"));
const SendVerificationAgain = lazy(() =>
  import("./screens/SendVerificationAgain")
);

const Contact = lazy(() => import("./screens/Contact"));
const Faq = lazy(() => import("./screens/discover/Faq"));
const TermsScreen = lazy(() => import("./screens/discover/Terms"));
const DisclaimerScreen = lazy(() => import("./screens/discover/Disclaimer"));
const AboutScreen = lazy(() => import("./screens/discover/About"));

const SingleNews = lazy(() => import("./screens/SingleNews"));
const AllNews = lazy(() => import("./screens/News"));
const CreateNews = lazy(() => import("./components/news/CreateNews"));

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

  const tawkToPropertyId = "614adb25d326717cb682b7be";
  const tawkToKey = "1fg66g355";
  useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey);
  }, []);

  return (
    <>
      <Router>
        <MyNavbar />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Suspense fallback={<div>Loading....</div>}>
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
            <Route path="/login" component={LoginScreen} exact />
            <Route path="*" component={PageNotFoundScreen} />
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
                path="/admin/subscriptions"
                component={
                  userInfo && userInfo.isAdmin
                    ? SubscriptionsScreen
                    : HomeScreen
                }
                exact
              />
            )}
            {userInfo && userInfo.isAdmin && (
              <Route path="/admin/users" component={UsersScreen} exact />
            )}
            {userInfo && userInfo.isSuperAdmin && (
              <Route
                path="/superadmin/users"
                component={SuperAdminUser}
                exact
              />
            )}

            <Route
              path="/user/dashboard"
              component={userInfo ? UserDashboardScreen : LoginScreen}
              exact
            />

            <Route path="/subscription/testie" component={Testie} exact />
            <Route path="/subscription/noob" component={Noob} exact />
            <Route path="/subscription/basic" component={Basic} exact />
            <Route path="/subscription/standard" component={Standard} exact />
            <Route path="/subscription/gold" component={Gold} exact />
            {userInfo && userInfo.isAdmin && (
              <Route
                path="/admin/games/create-game"
                component={
                  userInfo && userInfo.isAdmin ? CreateGameScreen : HomeScreen
                }
                exact
              />
            )}
            <Route path="/subscriptions" component={BuyGamesScreen} exact />

            {userInfo && userInfo.isAdmin && (
              <Route path="/admin/news/" component={AdminNewsScreen} exact />
            )}

            <Route
              path="/send-verification-again"
              component={!userInfo ? SendVerificationAgain : HomeScreen}
              exact
            />

            <Route path="/discover/about" component={AboutScreen} exact />
            <Route
              path="/discover/disclaimer"
              component={DisclaimerScreen}
              exact
            />
            <Route path="/discover/terms" component={TermsScreen} exact />
            <Route path="/discover/faq" component={Faq} exact />
            <Route path="/discover/contact" component={Contact} exact />

            {userInfo && userInfo.isAdmin && (
              <Route path="/admin/news/create" component={CreateNews} exact />
            )}

            <Route path="/sportsnews" component={AllNews} exact />

            <Route path="/sportsnews/:id" component={SingleNews} exact />
          </Suspense>
        </Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <MyFooter />
        </Suspense>
      </Router>
    </>
  );
};

export default App;
