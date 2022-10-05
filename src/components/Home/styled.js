import styled from "styled-components";
import { fadeIn } from "../generalAnimations";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 70rem;
  animation: 0.5s ${fadeIn} forwards;
`;
