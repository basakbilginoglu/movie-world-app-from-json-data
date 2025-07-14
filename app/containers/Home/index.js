import React from 'react';
import FeaturedMovie from '@/app/components/featured-movie';
import Movies from '@/app/mocks/movies.json';
import Genres from '@/app/mocks/genres.json';
import Categories from '@/app/components/categories';
import MoviesSection from '@/app/components/movie-section';

export default function HomeContainer({ selectedCategory }) {
  // Kategoriye göre gerçek film listesini bul
  let filteredMovies = [];
  if (selectedCategory && selectedCategory.id) {
    filteredMovies = Movies.results.filter(movie =>
      movie.genre_ids && movie.genre_ids.includes(Number(selectedCategory.id))
    );
  }
  const genre = Genres.genres.find(genre => genre.id.toString() === selectedCategory.id);

  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
      <Categories categories={Genres.genres.slice(0,5)} />
      {filteredMovies.length > 0 && (
        <MoviesSection title={genre ? genre.name : "Category"}
         movies={filteredMovies} />
      )}
      <MoviesSection title="Popular Films" movies={Movies.results.slice(0, 7)} />
      <MoviesSection title="Your Favorites" movies={Movies.results.slice(7,15)} />
    </div>
  );
}
