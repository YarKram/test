import {
	AvatarFrame,
	Background,
	Button,
	ContentItem,
	ContentList,
	DivisionLine,
	Logo,
	UpperBackGround,
	UserAvatar,
} from "./Card.styled";
import BackgroundImage from "../../images/bg-pic-3x.png";
import GoitLogo from "../../images/goit-logo.png";
import { useState } from "react";

export const Card = ({ user }) => {
	const { tweets, avatar, id } = user;

	const [active, setActive] = useState(() => {
		const savedState = localStorage.getItem(`activeState-${id}`);
		if (savedState === null) {
			localStorage.setItem(`activeState-${id}`, JSON.stringify(false));
			return false;
		}
		return JSON.parse(savedState);
	});

	const [followers, setFollowers] = useState(() => {
		const savedFollowers = localStorage.getItem(`followers-${id}`);
		return savedFollowers ? JSON.parse(savedFollowers) : user.followers;
	});

	const handleClick = () => {
		const newActiveState = !active;
		setActive(newActiveState);

		const updatedFollowers = newActiveState ? followers + 1 : followers - 1;

		setFollowers(updatedFollowers);

		localStorage.setItem(`activeState-${id}`, JSON.stringify(newActiveState));
		localStorage.setItem(`followers-${id}`, JSON.stringify(updatedFollowers));
	};

	return (
		<Background>
			<Logo alt="goit-logo" src={GoitLogo} />
			<UpperBackGround alt="user-avatar" src={BackgroundImage} />
			<DivisionLine>
				<AvatarFrame>
					<UserAvatar alt="user-avatar" src={avatar} />
				</AvatarFrame>
			</DivisionLine>
			<ContentList>
				<ContentItem>{tweets} tweets</ContentItem>
				<ContentItem>{followers.toLocaleString()} following</ContentItem>
			</ContentList>
			<Button active={active} onClick={handleClick}>
				{active ? "following" : "follow"}
			</Button>
		</Background>
	);
};
