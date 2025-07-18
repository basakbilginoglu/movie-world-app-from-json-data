import React from "react";

import FeatureMovieLoading  from "@/app/components/featured-movie";
import CategoriesLoading from "@/app/components/categories";
import  MoviesSectionLoading from "@/app/components/movie-section";

function HomeLoading() {
  return (
    <>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </>
  );
}

export default HomeLoading;