fetch('https://api.themoviedb.org/3/movie/popular', {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTk1NTA1NmI1NDBkNTZkY2MwZWM3MWM3NDY3OTY2ZCIsIm5iZiI6MTc0NzU2MDA4Mi4zNiwic3ViIjoiNjgyOWE2OTIxN2Y0YjljZmM4ZGIyNjBhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.U48Du0kQepSktn5PfrFRLd7md4wN9JzRYFmR8J_tCCg',
    'Content-Type': 'application/json;charset=utf-8',
  },
})
  .then(res => res.json())
  .then(data => {
    console.log(data.results);
  });



// red color
//#B22222
// white color
//#FFFBF1