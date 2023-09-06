import styled from "styled-components";

export const LoginButton = styled.button`
	background-color: var(--color-primary);
	color: #fff;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0.9375rem 0.9375rem;
	gap: 0.6344rem;
	border: 0.0761rem solid var(--color-primary);
	border-radius: 0.25rem;
	font-family: var(--font-primary);
	font-style: normal;
	font-weight: 500;
	font-size: 1rem;
	line-height: 1.625rem;
`;

export const ReturnButton = styled.button`
	background-color: var(--grey-3);
	color: var(--grey-0);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 0rem 0.9375rem;
	gap: 0.6344rem;
	border: 0.0761rem solid var(--grey-3);
	border-radius: 0.25rem;
	font-family: var(--font-primary);
	font-style: normal;
	font-weight: 600;
	font-size: 0.75rem;
	line-height: 1.75rem;
`;

export const AddButton = styled.button`
	background-color: var(--grey-3);
  color: var(--grey-0);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 0rem 0.7rem;
  &:hover{
    background-color: var(--grey-2);
  }
`;
