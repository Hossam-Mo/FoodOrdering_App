import "./App.css";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Log from "./components/log/Log";
import SignUp from "./components/log/signUp/SignUp";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { get_user } from "./redux/actionTypes";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(auth.currentUser);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getDoc(doc(db, "users", user.uid))
          .then((res) => {
            dispatch({
              type: get_user.type,
              user: {
                name: user.displayName,
                photoURL: user.photoURL,
                email: user.email,
                phoneNumber: user.phoneNumber,
                uid: user.uid,
                type: res.data().type,
                location: res.data().location,
              },
            });
          })
          .catch((err) => {
            console.log(err);
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

/*
1-add the menu to the sign in resturanrt **** done
2-fix the menu bug that the menu dosen't show to the user **** done
3-add an image uploader **** done
4-I need to make the resturantes add, edit, delete, on their menu  
5-fix the bug of double rows
6-add a check out page
7-add an order page... 1-when the user check out the order it get added in the restaurant orders page
                       2-create the restaurant orders page
                       3-when the user check out the order he get send to a page that have a map point of his location and the resturant location
                          and a chat to the resturant get added to his chat page
                       4-create a chat page btween restaurants and their clients
8-notification seystem to the restaurants when they get an order 
9-make the website responsive to the phones

optional
10- create a path finding algorithm with grid based map 
*/
