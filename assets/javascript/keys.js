console.log("this is loaded");

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.bandsInTownAPI = {
  id: process.env.BANDSINTOWNAPI
};

exports.omdbAPI = {
  id: process.env.OMDB_API
};

// all API keys will go into this folder, with which I will access the .env file
