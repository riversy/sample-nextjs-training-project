import styles from './page.module.css';
import {PTag} from "@/components";
import {JSX} from "react";

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <PTag>Test text</PTag>
    </main>
  );
}
