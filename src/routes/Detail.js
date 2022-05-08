import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [load, setLoad] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data);
    setMovie(json.data.movie);
    setLoad(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {load ? (
        <h1>Loading...</h1>
      ) : (
        <MovieDetail
          key={id}
          coverImg={movie.medium_cover_image}
          date={movie.year}
          title={movie.title}
          summary={movie.description_full}
          genres={movie.genres}
        />
      )}
    </div>
  );
}
export default Detail;
