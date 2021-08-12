import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
