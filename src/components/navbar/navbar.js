import styled from "styled-components";

const NavStyles = styled.section`
  width: 100%;

  .header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2% 10% 0;
    background-color: #f5d9a6;
    /*  z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0; 
    background-color: rgb(253, 249, 238); */
  }

  .logo {
    text-decoration: none;
    color: #000;
    font-family: monospace;
    font-size: 23px;
    font-weight: bold;
  }

  #menu-btn {
    display: none;
  }

  .nav-menu a {
    text-decoration: none;
    color: #000;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    padding: 3px 30px;
  }

  .nav-menu a.sign {
    color: #fff;
    background-color: rgb(99, 81, 53);
    border-radius: 20px;
  }

  @media (max-width: 520px) {
    .nav-menu a {
      display: none;
    }

    #menu-btn {
      display: flex;
      margin-right: -200px;
      cursor: pointer;
    }
  }
`;

export default NavStyles;
