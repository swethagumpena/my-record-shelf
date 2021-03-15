import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Landing.module.scss';

const Landing = () => {
  const history = useHistory();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <p>:((</p>
        <p>Seems a bit empty in here</p>
        <button type="button" onClick={() => history.push('/songs')}>sync</button>
      </div>

    </div>
  );
};
export default Landing;
