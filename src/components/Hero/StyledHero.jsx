import styled from "styled-components";
import defaultImage from '../../images/defaultBcg.jpeg';

export const StyledHero = styled.header`
  min-height: 70vh;
  background: url(${props => (props.img ? props.img : defaultImage)}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;