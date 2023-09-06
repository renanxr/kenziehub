import { UserInfoContainer } from "../../styles/grid";
import { PagesParagraph, PagesTitle1 } from "../../styles/typography";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const UserInfo = () => {
	const { user } = useContext(UserContext);

	return (
		<UserInfoContainer>
			<PagesTitle1>Olá, {user.name}</PagesTitle1>
			<PagesParagraph>{user.course_module}</PagesParagraph>
		</UserInfoContainer>
	);
};
