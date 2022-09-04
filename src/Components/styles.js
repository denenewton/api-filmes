import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  position: absolute;
  top:-4rem;
  z-index: 44;
  
  input {
    width: 205px;
    padding: 0.4rem 0 0.4rem 0.4rem;
    font-family: sans-serif;
    font-size: 1rem;
  }
  ul {
    height: auto;
    width: 204px;
    list-style: none;
    color: black;
    background-color: #fff;

    .links:link, .links:visited {
      display:block;
      padding: 0.3rem 0.5rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      font-size: 0.85rem;
      text-decoration: none;
      color: black;
    }
    .links:hover {
      text-decoration: underline;
    }
  }
`;
