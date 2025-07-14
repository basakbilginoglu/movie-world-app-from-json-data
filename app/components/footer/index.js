import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
     
      <Link href="https://twitter.com/basakbilginoglu" target="_blank">
        Made with ❤️ by Başak
      </Link>
    </footer>
  );
}