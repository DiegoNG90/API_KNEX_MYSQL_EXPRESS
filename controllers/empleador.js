import Playlist from '../models/empleadores';

//Acá vamos a armar el CRUD. Esta funcion METE directamente a la BDD

//CREATE DATA/NEW PLAYLIST
export async function getAllEmployers(req, res) {
  try {
  } catch (error) {}
}

//READ/GET ALL
export async function getAllPlaylists(req, res) {
  try {
    const playlists = await Playlist.findAll();
    res.status(200).json({
      data: playlists,
    });
  } catch (error) {
    console.log('El error es:', error);
    res.status(500).json({
      message: 'Something gone wrong getting all the  Playlist',
      data: {},
    });
  }
}

// READ / GET 1 by ID

export async function getOnePlaylist(req, res) {
  try {
    const { id } = req.params;
    const queryPlaylist = await Playlist.findOne({
      where: {
        id,
      },
    });
    res.status(200).json(queryPlaylist);
  } catch (error) {
    res.status(500).send(error);
  }
}

//DELETE BY ID
export async function deleteOnePlaylist(req, res) {
  try {
    const { id } = req.params;
    const deleteRowCount = await Playlist.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({
      message: 'Playlist deleted succesfully',
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).send(error);
  }
}

// UPDATE BY ID
export async function updateOnePlaylist(req, res) {
  try {
    const { id } = req.params;
    const { name, priority, description, deliverydate } = req.body;

    const playlists = await Playlist.findAll({
      attributes: ['id', 'name', 'description', 'deliverydate'],
      where: {
        id,
      },
    });
    if (playlists.length > 0) {
      playlists.forEach(async (playlist) => {
        await playlist.update({
          name,
          priority,
          description,
          deliverydate,
        });
      });
    }

    return res.status(200).json({
      message: 'Playlist updated succesfully',
      data: playlists,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
