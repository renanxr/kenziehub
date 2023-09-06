import styled from "styled-components";

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #000000;
	height: 100vh;
	gap: 1.875rem;
	overflow-y: auto;
`;

export const DashContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #000000;
	height: 100vh;
`;

export const FormContainer = styled.div`
	width: 23.0625rem;
	background: var(--grey-3);
	box-shadow: 0rem 0.25rem 2.5rem -0.625rem rgba(0, 0, 0, 0.25);
	border-radius: 0.25rem;
	display: flex;
	flex-direction: column;
	padding: 2.625rem 1.375rem;
	gap: 1.375rem;
	overflow-y: auto;
	@media (max-width: 62.5rem) {
		width: 18.5rem;
		padding: 2.1057rem 1.103rem;
		gap: 1.1031rem;
	}
`;

export const RegisterHeader = styled.div`
	display: flex;
	justify-content: space-around;
	width: 40%;
	padding: 0% 7%;
	gap: 6.25rem;
`;

export const HeaderDash = styled.header`
	width: 100%;
	padding: 2% 0%;
	display: flex;
	justify-content: space-around;
	border-bottom: solid 0.0625rem var(--grey-3);
`;

export const MainContainer = styled.main`
	width: 100%;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
`;

export const UserInfoContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	border-bottom: solid 0.0625rem var(--grey-3);
	height: 7.5rem;
	padding: 0% 7%;
	@media (max-width: 31.25rem) {
		align-items: flex-start;
		flex-direction: column;
		padding: 0.75rem 0.125rem 0.75rem 1.25rem;
		gap: 0.625rem;
	}
`;

export const UserTechsContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
	padding: 2% 22%;
	gap: 1.25rem;
`;

export const UserTechHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const UserTechsList = styled.ul`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 2% 2%;
	border-radius: 4px;
	gap: 1rem;
	background: #212529;
`;

export const UserTechsOptions = styled.li`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	border-radius: 4px;
	padding: 1% 2%;
	background: #121214;
	&:hover {
		background-color: #343b41;
		cursor: pointer;
	}
`;


