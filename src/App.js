import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import Shows from "./pages/shows/Shows";
import People from "./pages/people/People";
import More from "./pages/more/More";
import Error from "./pages/error/Error";
import MoviePage from "./pages/moviepage/MoviePage";
import Cast from "./pages/cast/Cast";
import Crew from "./pages/crew/Crew";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/people" element={<People />} />
          <Route path="/more" element={<More />} />
          <Route path="*" element={<Error />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/cast/:id" element={<Cast />} />
          <Route path="/cast/:id/movie/:id" element={<MoviePage />} />
          <Route path="/crew/:id" element={<Crew />} />
          <Route path="/crew/:id/movie/:id" element={<MoviePage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
