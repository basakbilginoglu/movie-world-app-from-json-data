    import React from 'react'
    import MovieContainer from '../../containers/movie';
    import Movies from '@/app/mocks/movies.json';
import { notFound } from 'next/navigation';
    
    export default function MoviePage({ params }) { 
        const movieDetaile= Movies.results.find(movie => movie.id.toString() === 
           params.id);

        if(!movieDetaile){
           return notFound();
        }
      return (
        <div>
            <MovieContainer movie={movieDetaile} />
        </div>
      )
    }
