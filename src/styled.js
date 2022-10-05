import styled, { css, keyframes } from "styled-components";

export const fadeIn = keyframes`
	from {
		opacity: 0;
		transform: translateY(-20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const fadeOut = keyframes`
	from {
		opacity: 1;
		transform: translateY(0);
	}
	to {
		transform: translateY(-20px);
		opacity: 0;
	}
`;

export const Animation = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
  max-width: 70rem;
	${props => props.transitionStage === 'fadeIn'
		? css`animation: 0.5s ${fadeIn} forwards;`
		: css `animation: 0.5s ${fadeOut} forwards;`
	}
`;
