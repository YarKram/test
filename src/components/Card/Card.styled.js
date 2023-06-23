import styled from "styled-components";

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	position: relative;

	width: 380px;
	height: 460px;

	padding: 28px 36px 36px 36px;

	background: linear-gradient(
		114.99deg,
		#471ca9 -0.99%,
		#5736a3 54.28%,
		#4b2a99 78.99%
	);
	box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
	border-radius: 20px;
`;

export const Logo = styled.img`
	position: absolute;
	left: 20px;
	top: 20px;
	width: 76px;
	height: auto;
`;

export const UpperBackGround = styled.img`
	width: 100%;
	height: auto;
	margin-bottom: 18px;
`;

export const DivisionLine = styled.div`
	position: relative;
	width: calc(100% + 72px);
	height: 8px;

	margin-bottom: 62px;

	background: #ebd8ff;
	box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
		inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarFrame = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	left: 50%;
	top: 0px;
	transform: translate(-50%, -50%);
	width: 80px;
	height: 80px;

	background: #ebd8ff;
	box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
		inset 0px -2.19582px 4.39163px #ae7be3,
		inset 0px 4.39163px 3.29372px #fbf8ff;
	/* border: 9px solid #ae7be3; */
	border-radius: 50%;
`;

export const UserAvatar = styled.img`
	width: 62px;
	height: 62px;
	border-radius: 50%;
	background: linear-gradient(
		114.99deg,
		#471ca9 -0.99%,
		#5736a3 54.28%,
		#4b2a99 78.99%
	);
	box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const ContentList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 0;
	align-items: center;

	list-style: none;

	margin-bottom: 26px;
`;

export const ContentItem = styled.li`
	font-family: "Montserrat";
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	text-transform: uppercase;

	color: #ebd8ff;
`;

export const Button = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 14px 28px;

	width: 196px;
	height: 50px;
	background-color: ${(p) => (p.active ? "#5CD3A8" : "#ebd8ff")};

	box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
	border-radius: 10.3108px;
	cursor: pointer;
	// text

	font-family: "Montserrat";
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	/* identical to box height */

	text-transform: uppercase;

	/* Landing/button text color */

	color: #373737;
`;
