import { HeaderDashPage } from "../../components/HeaderDash";
import { UserInfo } from "../../components/UserInfo";
import { UserTechs } from "../../components/UserTechs";
import { MainContainer, DashContainer } from "../../styles/grid";


export const HomePage = () => {

	return (
		<DashContainer>
			<HeaderDashPage />
			<MainContainer>
				<UserInfo />
				<UserTechs />
			</MainContainer>
		</DashContainer>
	);
};
