/* eslint-disable max-len */
import axios from 'axios';

const { token } = require('../constants/constants');

require('dotenv').config();

const getSongs = async () => {
  const allSongs = await axios.get('/records', { headers: { Authorization: `Bearer ${token}` } });
  return allSongs.data.data;
};

const getLikes = async (songId) => {
  const songLikes = await axios.get(`/records/${songId}/likes`, { headers: { Authorization: `Bearer ${token}` } });
  return songLikes.data.data;
};

export default { getSongs, getLikes };
