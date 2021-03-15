import React from 'react';
import { useHistory } from 'react-router-dom';

const Landing = () => {
  const history = useHistory();

  return (
    <div>
      <p>:((</p>
      <p>Seems a bit empty in here</p>
      <button type="button" onClick={() => history.push('/songs')}>sync</button>
    </div>
  );
};
export default Landing;
