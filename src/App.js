import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Search from "./Search";
import AuthContext from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthContext>

    </div>
  );
}

export default App;
