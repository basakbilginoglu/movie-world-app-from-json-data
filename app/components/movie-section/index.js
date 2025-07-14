import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

export default function MoviesSection({ title, movies }) {
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie, idx) => (
          <div className={styles.movie} key={movie.id || idx}>
            <Link href={`/movie/${movie.id || idx}`}>
              <Image
                fill
                unoptimized
                alt={movie.title || "Movie"}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path || ""}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
