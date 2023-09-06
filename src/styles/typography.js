import styled from "styled-components";

export const PagesTitle1 = styled.h1`
	color: #fff;
	display: flex;
	justify-content: center;
	font-family: var(--font-primary);
	font-style: normal;
	font-weight: 700;
	font-size: 1.125rem;
	line-height: 1.75rem;
`;

export const PagesParagraph = styled.p`
	color: var(--grey-1);
	font-family: var(--font-primary);
	font-style: normal;
	font-weight: 600;
	font-size: 0.75rem;
	line-height: 1.125rem;
	display: flex;
	justify-content: center;
`;

export const ListText1 = styled.p`
	color: #fff;
	font-size: 0.88813rem;
	font-family: var(--font-primary);
	font-weight: 700;
	line-height: 1.39588rem;
`;

export const ListText2 = styled.p`
	color: var(--grey-1);
	font-size: 0.76138rem;
	font-family: var(--font-primary);
	line-height: 1.39588rem;
	&:hover {
		color: #fff;
	}
`;

export const ModalTitle = styled.h2`
	color: var(--grey-0);
	font-size: 0.875rem;
	font-family: Inter;
	font-weight: 700;
	line-height: 1.5rem;
`;

export const ModalClose = styled.p`
	color: var(--grey-1);
	font-size: 1rem;
	font-family: Nunito;
	font-weight: 600;
	line-height: 1.625rem;
`;
