import { useState } from "react";
import Header from "./components/header";
import MovieGrid from "./components/movie-grid";
import Pagination from "./components/pagination";
import { movies as initialMovies } from "./data/movies";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [currentPage, setCurrentPage] = useState(1);

  const handleToggleBookmark = (id: number) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie
      )
    );
  };

  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <h2 className="section-title">영화 목록</h2>
        <MovieGrid movies={movies} onToggleBookmark={handleToggleBookmark} />
        <Pagination
          currentPage={currentPage}
          totalPages={5}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </main>
    </div>
  );
}