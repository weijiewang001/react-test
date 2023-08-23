import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Search from "./Search";
import SearchResult from "./SearchResult";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
