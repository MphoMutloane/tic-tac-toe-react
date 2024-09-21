import styled from "styled-components";

export const CellStyle = styled.button`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
  font-size: 3rem;
  border: none;
  width: 9rem;
  height: 9rem;
  border-radius: 2.5rem;
  box-shadow: 5px 10px ${(props) => props.theme.colors.purple};
  cursor: pointer;
  padding: 3rem;

  .markedItem {
    path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }

  /* SVG outline color responds to theme */
  .outlineIcon path,
  .outlineIcon circle {
    fill: none; /* Ensures only the outline is visible */
    stroke: ${(props) =>
      props.theme.colors.primary}; /* Theme-based stroke color */
    stroke-width: 0; /* Invisible outline by default */
  }

  &:hover {
    .outlineIcon path,
    .outlineIcon circle {
      stroke: ${(props) => props.theme.colors.primary};
      stroke-width: 2; /* Outline becomes visible on hover */
    }
  }
`;
