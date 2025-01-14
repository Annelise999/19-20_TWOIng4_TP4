// Clé api
const API_KEY = "ce8d921f";
// Url API
const API_URL = "http://www.omdbapi.com/";



// Load the full build.
var _ = require('lodash');

// ./routes/
var express = require('express');
var router = express.Router();

var films = [{
    id: "al",
    film: "Harry potter",
    yearOfRelease: "2019",
    duration: "124", // en minutes,
    actors: ["Cruise", "Tom"],
    poster: "image.jpg", // lien vers une image d'affiche,
    boxOffice: "250", // en USD$,
    rottenTomatoesScore: "2"
}
]

router.get('/', (req, res) => {
res.status(200).json({ films }) ;
});

router.get('/:id', (req, res) => {
  
  const{id} = req.params;
  const film = _.find(films, ["id", id]);
  console.log(film);
  res.status(200).json({
    message: 'Film found!',
    film: film
  })
  
  });


router.put('/:film', (req, res) => {

  const id = _.uniqueId();
  const {film} = req.params;
  films.push({id,film});
  res.json({
    message: `Just added ${id}`,
    film: film
  });

});

router.post('/:id', (req, res) => {
  const { id } = req.params;
  const { film } = req.body;

  
  const userToUpdate = _.find(films, ["id", id]);
  console.log(userToUpdate);
  userToUpdate.film = film;

  res.json({
    message: `Just updated ${id} with ${film}`,
    film: id, film
  });

});
  
router.delete ('/:id', (req, res) => {
  const { id } = req.params;
  _.remove(films, ["id",id]);
  res.json({
    message : `Just removed ${id}`
  });
});


fetchMovie() {
  return axios
  .get(`${API_URL}?i=tt3896198&apikey=${API_KEY}`) 
}

  
  module.exports = router;

