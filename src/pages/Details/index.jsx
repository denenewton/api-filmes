import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_KEY, base_img } from '../../config/key';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { dataMovie } from '../../config/data';

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then(resp => resp.json())
      .then(data => {
        const { title, overview, poster_path, release_date } = data;
        const Movie = dataMovie.filter(d => d.name === data.title);
        const url = Movie.length === 0 ? '/' : Movie[0].url;
        
        const movie = {
          id,
          title: title,
          overview,
          url: url,
          image: `${base_img}${poster_path}`,
          releaseData: release_date,
        };
        console.log(movie);
        return setMovie(movie);
      });
  }, [id]);

  return (
    <Container>
      <div className="movie" key={movie.id}>
        <img src={movie.image} alt={movie.title} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>{movie.overview}</span>
          <span className="release-date">{movie.releaseData}</span>
          <Link to={'/'}>
            <button>Go Back</button>
          </Link>
          {movie.url === '/' ? (
            ''
          ) : (
            <a href={`${movie.url}`} target="_blank" rel="noreferrer">
              <button>Watch Now</button>
            </a>
          )}
        </div>
      </div>
    </Container>
  );
}
export default Details;
