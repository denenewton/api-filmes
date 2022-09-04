import { useState, useEffect } from 'react';
import { API_KEY } from '../config/key';
import { Link } from 'react-router-dom';
import { Container } from './styles';

function Search() {
  const [term, setTerm] = useState('?');
  const [resultsTerm, setResultsTerm] = useState([]);
  const [style, setStyle] = useState('');

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}`
    )
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results);
        return setResultsTerm(data.results);
      });
  }, [term]);

  function handleChange(e) {
    setTimeout(() => {
      let term = e.target.value;
      if (term.length === 0) {
        setStyle('none');
        return;
      } else {
        setStyle('');
        setTerm(term);
        console.log(term);
      }
    }, 1020);
  }
  return (
    <Container>
      <input
        type="search"
        placeholder="Search for another movie"
        onChange={handleChange}
      />
      <ul style={{ display: `${style}` }}>
        {
          // term.length === 0 ? '':
          resultsTerm.map(movie => {
            return (
              <Link
                className="links"
                key={movie.id}
                to={`/details/${movie.id}`}
              >
                {movie.title}
              </Link>
            );
          })
        }
      </ul>
    </Container>
  );
}

export default Search;
