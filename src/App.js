import "./App.css";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Log from "./components/log/Log";
import SignUp from "./components/log/signUp/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Nav></Nav>
                <Main></Main>
              </div>
            }
          ></Route>
          <Route path="/login">
            <Route index element={<Log></Log>}></Route>
            <Route
              path="newUser"
              element={<SignUp type={"user"}></SignUp>}
            ></Route>
            <Route
              path="newRestaurant"
              element={<SignUp type={"restaurant"}></SignUp>}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
