fetch("http://superheroapi.com/api/10211817607051908/346",  {method: 'GET'} )
  .then(response => response.json())
  .then(data => insertCharacter(data));

  function insertCharacter(data){
    console.log(data)
    $('.character').append(`<div class="bio"><img src="${data.image.url}" width="200" height="260">  <div class="about"><h1>${data.name}</h1> <h2>${data.biography['full-name']}</h2> <p>${data.biography['place-of-birth']}</p></div> <div class="skills"><h3>Habilidades</h3></div></div>`);
    function loop(){
      for ( skill in data.powerstats){
        console.log(data.powerstats[skill])
        $('.skills').append(`<p>${skill}: ${data.powerstats[skill]}</p>`);
      }
  }
  loop();
}

fetch("https://content.googleapis.com/youtube/v3/search?maxResults=4&part=snippet&q=ironman&key=AIzaSyA6InuRy7F7wOjeUxDZqrOeDCylBpt-OdY", {method: 'GET'})
.then(response => response.json())
.then(data => insertVideo(data));

function insertVideo(data){
  for (item of data.items) {
    let iframe = ` <iframe width="230" height="150" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> `;
    $('.videos').append(iframe)
  }
}

fetch("http://www.omdbapi.com/?apikey=7acb37a5&s=ironman", {method: 'GET'})
.then(response => response.json())
.then(data => insertMovies(data));

function insertMovies(data){
  for (item of data.Search) {
    let content = ` <div class="movie-item"><img src="${item.Poster}" width="200" height="230"> <h3>${item.Title}</h3> <a href="https://www.imdb.com/title/${item.imdbID}">IMDB</a></div> `;
    $('.movies').append(content);
  }
}