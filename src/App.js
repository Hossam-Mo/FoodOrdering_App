import "./App.css";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Log from "./components/log/Log";
import SignUp from "./components/log/signUp/SignUp";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { get_user } from "./redux/actionTypes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("doooooooooooooooo");
      if (user) {
        console.log(user);
        dispatch({
          type: get_user.type,
          user: { name: user.displayName, photoURL: user.photoURL },
        });
      } else {
        dispatch({
          type: get_user.type,
          user: null,
        });
        console.log("no user exist");
      }
    });
  }, []);
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
