import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackButton = styled(Link)`
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

export const DropDown = styled.select`
	width: 196px;
	height: 78px;
	box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

	border: none;
	border-radius: 10.3108px;
	font-size: 17px;
	background-color: ${(p) => (p.active ? "#5CD3A8" : "#ebd8ff")};
	padding: 14px;

	font-family: "Montserrat";
`;

export const Navigation = styled.nav`
	display: flex;
	gap: 10px;
	justify-content: center;
`;

export const CardList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	padding: 0;
	justify-content: center;
`;

export const LoadMoreButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 14px 28px;

	margin: auto;

	width: 196px;
	height: 50px;
	background-color: ${(p) => (p.active ? "#5CD3A8" : "#ebd8ff")};

	border: none;

	box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
	border-radius: 10.3108px;
	cursor: pointer;

	font-family: "Montserrat";
	font-style: normal;
	font-weight: 600;
	font-size: 18px;
	line-height: calc(22 / 18);

	text-transform: uppercase;

	color: #373737;
`;
