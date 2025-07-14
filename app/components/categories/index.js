import React from 'react'
import styles from './styles.module.css';
import Link from 'next/link';

export default function Categories(props) {
  const categories = Array.isArray(props.categories) ? props.categories : [];
  return (
    <div className={styles.categories}>
      {categories.length === 0 ? (
        <div>Kategori bulunamadı.</div>
      ) : (
        categories.map((category) => (
          <Link
            key={category.id}
            className={styles.category}
            href={`/${category.id}`}
          >
            <div className={styles.name}>{category.name}</div>
          </Link>
        ))
      )}
    </div>
  );
}
