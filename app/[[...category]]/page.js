import React from 'react';
import HomeContainer from '../../app/containers/Home';

export default async function Home(context) {
  const { params } = await context;
  const categoryParam = Array.isArray(params?.category) ? params.category : [];
  const hasCategory = categoryParam.length > 0;

  return (
    <HomeContainer
      selectedCategory={{
        id: hasCategory ? categoryParam[0] : '',
        movies: [],
      }}
    />
  );
}