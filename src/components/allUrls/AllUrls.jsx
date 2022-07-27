import styled from "styled-components";

const UrlStyles = styled.section`
  padding: 5%;
  display: flex;
  flex-direction: column;
  color: black;
  background-color: #d8b8b8;

  h1 {
    padding: 30px 0;
  }

  div {
    background-color: blue;
    overflow: auto hidden;

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      box-shadow: 0 0 5px 2px #010101b5;
      min-width: 750px;

      li.head,
      .body {
        display: grid;
        padding: 10px 3px;
        grid-template-columns: 0.2fr 1fr 1.5fr 0.7fr;
        background-color: #ffffff;
        text-align: center;
        align-content: center;
        justify-items: center;
        overflow-x: scroll;
      }

      li.head {
        color: white;
        padding: 20px 5px;
        background-color: #0c0c0b;
      }

      li.body:nth-child(even) {
        background: #f5d9a6;
      }
    }
  }
`;

export default UrlStyles;
