/* eslint-disable max-len */
import axios from 'axios';

require('dotenv').config();

const getSongs = async () => {
  const allSongs = await axios.get('/records', { headers: { Authorization: `Bearer ${process.env.token}` } });
  return allSongs.data.data;
};

export default { getSongs };
