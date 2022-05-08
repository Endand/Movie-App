import PropTypes from "prop-types";

function MovieDetail({ coverImg, date, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h4>Released on {date}</h4>
      <h2>{title}</h2>
      <p>{summary}</p>
      <div>
        {genres.length > 1 ? (
          <div>
            <h3>Genres:</h3>
            <ul>
              {genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        ) : (
          <h3>Genre: {genres}</h3>
        )}
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
