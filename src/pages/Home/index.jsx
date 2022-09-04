import { Container, MovieList, Movie } from './styles';
import { useState, useEffect } from 'react';
import { API_KEY, base_img } from '../../config/key';
import { Link } from 'react-router-dom';
import Search from '../../Components/Search';

function Home() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results);
        return setMovie(data.results);
      });
  }, []);

  return (
    <Container>
      <h1>Movies</h1>
      <Search />
      <MovieList>
        {movie.length === 0
          ? 'Movie do not exist in data!'
          : movie.map(mov => {
              return (
                <Movie key={mov.id}>
                  <Link to={`/details/${mov.id}`}>
                    <img
                      src={`${base_img}${mov.poster_path}`}
                      alt={mov.title}
                    />
                  </Link>
                  <span>{mov.title}</span>
                </Movie>
              );
            })}
      </MovieList>
    </Container>
  );
}

export default Home;
