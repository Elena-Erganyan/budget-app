

export const Animation = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
  	max-width: 70rem;
	animation: 0.5s ${({transitionStage}) => (
		transitionStage === 'fadeIn' ? fadeIn : fadeOut
	)} forwards;
`;
