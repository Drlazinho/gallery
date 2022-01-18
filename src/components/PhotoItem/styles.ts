import styled from "styled-components";

export const Container = styled.div`
  background-color: #3d3f43;
  border-radius: 10px;
  padding: 10px;

  img {
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  button {
    margin-left: 20px;
    color: white;
    border-radius: 10px;
    background: #756df4;
    cursor: pointer;

    &:hover{
      transition: .7s;
      background: red;
    }
  }
`;