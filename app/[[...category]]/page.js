import React from 'react';
import HomeContainer from '../../app/containers/Home';


export default function Home({ params }) {
    let selectedCategory ;

    if (params.category?.length > 0) {
        selectedCategory = true
    }
  return <HomeContainer selectedCategory={{
        id:params.category?.[0] || ' ',
        movies: selectedCategory ? params.category?.slice(0,5) : [],
     }}
  
   
    />; 

}