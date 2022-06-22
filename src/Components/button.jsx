import styled from "styled-components";
import theme from '../theme';

export const Button = styled.button`
  width: 140px;
  height: 50px;
  color: #fff;
  background: ${theme.colors.darkColorAlt};
  border-radius: 8px;
  border-style: none;
  border: 2px solid linear-gradient(90.18deg, #30CEDF 0.15%, #1940B5 99.86%);
  transition: all .3s ease;

    &:hover {
        border: 2px solid blue;
    }
`