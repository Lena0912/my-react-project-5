export const MovieCast = () => {
  const options = { method: "GET", headers: { accept: "application/json" } };

  fetch(
    "https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US",
    options
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  return <>
    <p>Credits</p>
  </>;
};
export default MovieCast;
