/* eslint-disable max-len */
import axios from 'axios';

require('dotenv').config();

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0Y2E3OTQ3OC1iN2Q1LTQ0YWUtYjFlYy0zOWNlNzMxNWNjYWUiLCJuYW1lIjoiU3dldGhhIiwicm9sZSI6MCwic3ViamVjdCI6IlRlY2ggVW5pdiAyMDIxIiwiZWFzdGVyX2VnZyI6Ikdvb2QgbHVjayEiLCJhdWQiOiJtdXNpY3JlY29yZHMudGVjaHVuaXYuY29tIiwibmJmIjoxNjE1Nzg0NDIxLCJleHAiOjE2MTgzNzY0MjEsImlhdCI6MTYxNTc4NDQyMSwiaXNzIjoiTXVzaWMgUmVjb3JkcyJ9.oWycaJe08gKLWckzrZGJtOu-nEuIKDIvQuRWrcaVQxo';

const getSongs = async () => {
  //   const allSongs = await axios.get('/records', { headers: { Authorization: `Bearer ${process.env.token}` } });
  const allSongs = await axios.get('/records', { headers: { Authorization: `Bearer ${token}` } });
  return allSongs.data.data;
};

const getLikes = async (songId) => {
  const songLikes = await axios.get(`/records/${songId}/likes`, { headers: { Authorization: `Bearer ${token}` } });
  return songLikes.data.data;
};

export default { getSongs, getLikes };
