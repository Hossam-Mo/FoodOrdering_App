import "./App.css";
import Main from "./components/main/Main";
import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Log from "./components/log/Log";

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
          <Route path="/login" element={<Log></Log>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
