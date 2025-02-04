import { Link } from "react-router-dom";
import styled from "styled-components";

export const Movies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${(p) => p.theme.spacing(8)};
  justify-content: space-around;
  padding-top: ${(p) => p.theme.spacing(8)};
  list-style: none;
`;

export const MovieItem = styled.li`
  width: calc(25% - 32px);
  margin-bottom: ${(p) => p.theme.spacing(4)};
  text-align: center;
  background-color: ${(p) => p.theme.colors.grey};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: ${(p) => p.theme.spacing(2)};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:first-child {
    margin-top: ${(p) => p.theme.spacing(3)};
  }

  &:hover,
  &:focus {
    transform: translateY(-4px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;
export const MovieLink = styled(Link)`
text-decoration: none;
font-size: 12px;
color: ${(p) => p.theme.colors.textColor};
font-weight: bold;
transition: color 0.3 easy;
&:hover {
    color: ${(p) => p.theme.colors.accent};
}
`;

export const MoviePoster = styled.img`
width: 100%;
height: 300px;
object-fit: cover;
`;
