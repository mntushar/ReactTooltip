'use client'

import Tooltip from "../../../src/tooltip";

import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Alhamdulillah</h1>
      <div>
        <Tooltip text="Hi, I am Tooltip" possition='right'>
          <span>Tooltip</span>
        </Tooltip>
      </div>
      <div>
        <Tooltip text="Hi, I am Tooltip" possition='left'>
          <span>Tooltip</span>
        </Tooltip>
      </div>
      <div>
        <Tooltip text="Hi, I am Tooltip" possition='top'>
          <span>Tooltip</span>
        </Tooltip>
      </div>
      <div>
        <Tooltip text="Hi, I am Tooltip" possition='bottom'>
          <span>Tooltip</span>
        </Tooltip>
      </div>
    </div>
  );
}
