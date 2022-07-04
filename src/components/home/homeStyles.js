import styled from "styled-components";

export const HomeStyles = styled.div`
  margin-top: 160px;

  .form-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .sideimg1 {
    display: none;
  }

  form#form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;
    width: 250px;
    padding: 0px 25px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid rgb(204, 195, 195);
    box-shadow: 1px 10px 10px -1px rgb(204, 195, 195);
  }

  .sideimg img {
    height: auto;
    width: auto;
  }

  label#label {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: black;
    margin-bottom: 8px;
  }

  #custom {
    display: grid;
    grid-template-columns: 70% 30%;
    height: 35px;
    border-radius: 9px;
    border: 1px solid rgb(204, 195, 195);
    margin-bottom: 10px;
    padding: 0;
    justify-content: center;
    align-items: center;
    position: relative;

    input {
      outline: none;
    }

    div.rename {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 70%;

      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      /* height: 100%;
      display: flex;
      text-align: center;
      justify-content: center;
      margin: 0;
      top: 0;
      align-items: center;
      */
    }
  }

  input#url {
    height: 35px;
    /* border-radius: 9px; */
    border: 1px solid rgb(204, 195, 195);
    margin-bottom: 10px;
  }

  #url,
  ::placeholder {
    padding: 0 6px;
  }

  input#alias {
    width: 17rem;
    padding: 7px;
    border: 1px solid rgb(204, 195, 195);
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-left: 1px;
    background-color: white;
    color: rgb(199, 193, 193);
    width: 65px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 14px;
  }

  .btns {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  a#myurl {
    color: rgb(121, 111, 111);
    cursor: pointer;
  }

  .fet2-it {
    padding: 9px;
    border-radius: 10px;
    border: 1px solid;
    background-color: rgb(97, 49, 15);
    color: white;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 13px;
    width: 110px;
    cursor: pointer;
  }

  @media (max-width: 708px) {
    margin-top: 200px;

    .form-container {
      display: flex;
      flex-direction: column;
    }

    input#alias {
      width: 58px;
    }

    .sideimg {
      display: none;
    }

    .sideimg1 {
      display: flex;
    }

    .sideimg1 img {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      width: 20pc;
      margin-top: -100px;
    }
  }
`;
