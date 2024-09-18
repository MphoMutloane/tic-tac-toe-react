import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;

    ${({ theme }) => theme.media.mobile} {
      font-size: 11px;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

