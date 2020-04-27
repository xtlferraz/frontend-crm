import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f3f3f4;
`;

export const Login = styled.div`
  width: 200px;
  background-color: #fff;
  padding: 50px;
  overflow: hidden;

  h2 {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 13px;
    color: #333;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
  input {
    background-color: #ffffff;
    background-image: none;
    border: 1px solid #e5e6e7;
    border-radius: 1px;
    color: inherit;
    display: block;
    padding: 6px 12px;
    transition: border-color 0.15s ease-in-out 0s,
      box-shadow 0.15s ease-in-out 0s;
    width: 87%;
  }
  button {
    width: 100% !important;
    color: #fff;
    background-color: #1ab394;
    border-color: #1ab394;
    border-radius: 3px;
    font-size: inherit;
    display: block;
    padding: 6px 12px;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  background: inherit;
  border: 1px solid #e7eaec;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
  padding: 6px 0;
  margin-top: 5px;
  width: 100% !important;
`;
