import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.css";

export default function FeaturedMovie({ movie = {}, isCompact = true }) {
  const { poster_path, title, overview } = movie;

  return (
    <div className={styles.moviePoster}>
      {/* Poster image */}
      <Image
        unoptimized
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title ? `${title} poster` : "Movie poster"}
        fill
      />

      {/* Karanlık overlay */}
      <div className={styles.moviePosterOverlay}></div>

      {/* İçerik */}
      <div className={styles.movieContent}>
        <h1 className={styles.movieTitle}>{title}</h1>
        <p
          className={`${styles.overview} ${isCompact ? styles.shortOverview : ""
            }`}
        >
          {overview}
        </p>
        <div className={styles.actionButtons}>
          <Link className={styles.playButton} href={`/movie/${movie.id}`}>
            Play
          </Link>
          <button className={styles.addButton}>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
