const express = require('express');
const router = express.Router();

// getAllEmployers;
router.get('/all', (req, res) => {
  res.send('Todos los empleadores');
});
// router.post('/', createPlaylist);

// // /api/playlists/:id
// router.get('/:id', getOnePlaylist);
// router.delete('/:id', deleteOnePlaylist);
// router.put('/:id', updateOnePlaylist);

module.exports = router;
