import styled from "styled-components";

export const ModalContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
	background: rgba(18, 18, 20, 0.5);
	z-index: 10000;
	border-radius: 0.25rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ModalForm = styled.form`
	width: 23.0625rem;
	background: var(--grey-3);
	box-shadow: 0rem 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
	border-radius: 0rem 0rem 0.25rem 0.25rem;
	display: flex;
	flex-direction: column;
	padding: 1.5rem 1.375rem;
	gap: 1.375rem;
`;

export const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 23.0625rem;
	padding: 0.75rem 1.25rem;
	background: var(--grey-2);
	border-radius: 0.25rem 0.25rem 0rem 0rem;
`;

export const ModalButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
    gap: 2rem;
`;

export const StyledInputModal = styled.p`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .625rem 1.0152rem;
    gap: .6344rem;
    background: var(--grey-2);
    border: .0761rem solid var(--grey-2);
    border-radius: .25rem;
    color: var(--grey-1);
    font-family: var(--font-primary);
    font-style: normal;
    font-weight: 400;
    font-size: 1.0152rem;
    line-height: 1.625rem;
`;

export const SaveButton = styled.button`
	width: 65%;
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

export const DeleteButton = styled.button`
	width: 30%;
	background-color: var(--grey-1);
	color: var(--grey-0);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0.9375rem 0.9375rem;
	gap: 0.6344rem;
	border: 0.0761rem solid var(--grey-1);
	border-radius: 0.2538rem;
	font-family: var(--font-primary);
	font-style: normal;
	font-weight: 500;
	font-size: 1rem;
	line-height: 1.625rem;
`;
