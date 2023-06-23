import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(NavLink)`
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

	font-family: "Montserrat";
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: calc(22 / 18);
	text-decoration: none;
	text-transform: uppercase;
	color: #373737;
`;
