import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import BookList from "./components/book/BookList";
import NewBookPage from "./pages/NewBookPage";
import BookDetailPage from "./pages/BookDetailPage";
import BookEditPage from "./pages/BookEditPage";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/login">
            <LoginPage />
          </Route>
        )}
        {!authCtx.isLoggedIn && (
          <Route path="/signup">
            <SignupPage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/new">
            <NewBookPage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/detail/:id">
            <BookDetailPage></BookDetailPage>
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/edit/:id">
            <BookEditPage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/profile">
            <ProfilePage />
          </Route>
        )}
        {authCtx.isLoggedIn && (
          <Route path="/book">
            <BookList />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
