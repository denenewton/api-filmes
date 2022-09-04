import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  h1 {
    font-size: 3rem;
    text-align: center;
    margin: 4rem 0;
  }
`;
export const MovieList = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
  span {
    font-weight: bold;
    text-align: center;
  }
  a {
    transition: all 0.3s;
  }
  a:hover {
    transform: scale(1.05);
  }
`;
