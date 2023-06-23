import { useState } from "react";
import { Card } from "../Card/";
import { useEffect } from "react";

import {
	BackButton,
	CardList,
	DropDown,
	LoadMoreButton,
	Navigation,
} from "./CardsList.styled";

export const CardsList = () => {
	const [users, setUsers] = useState([]);
	const [visibleUsers, setVisibleUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const usersPerPage = 10;

	const [filter, setFilter] = useState("show-all"); // Initial filter value

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch(
					"https://649300b4428c3d2035d11946.mockapi.io/api/users"
				);
				const data = await response.json();
				setUsers(data);
				setVisibleUsers(data.slice(0, usersPerPage));
			} catch (error) {
				console.log(error);
			}
		};

		fetchUsers();
	}, []);

	const handleLoadMore = () => {
		const nextPage = currentPage + 1;
		const startIndex = (nextPage - 1) * usersPerPage;
		const endIndex = startIndex + usersPerPage;
		const newVisibleUsers = users.slice(startIndex, endIndex);

		let updatedVisibleUsers;
		if (filter === "follow") {
			updatedVisibleUsers = newVisibleUsers.filter((user) => {
				const activeState = localStorage.getItem(`activeState-${user.id}`);
				if (activeState === null || activeState === "false") {
					return true;
				}
				return false;
			});
		} else if (filter === "following") {
			updatedVisibleUsers = newVisibleUsers.filter(
				(user) => localStorage.getItem(`activeState-${user.id}`) === "true"
			);
		} else {
			updatedVisibleUsers = newVisibleUsers;
		}

		setVisibleUsers((prevVisibleUsers) => [
			...prevVisibleUsers,
			...updatedVisibleUsers,
		]);
		setCurrentPage(nextPage);
	};

	const handleFilterChange = (event) => {
		const selectedFilter = event.target.value;

		let updatedVisibleUsers;
		if (selectedFilter === "follow") {
			updatedVisibleUsers = users.filter(
				(user) => localStorage.getItem(`activeState-${user.id}`) === "false"
			);
		} else if (selectedFilter === "following") {
			updatedVisibleUsers = users.filter(
				(user) => localStorage.getItem(`activeState-${user.id}`) === "true"
			);
		} else {
			updatedVisibleUsers = users.slice(0, usersPerPage);
		}

		setVisibleUsers(updatedVisibleUsers);
		setFilter(selectedFilter);
		setCurrentPage(1);
	};

	const isLoadMoreDisabled = visibleUsers.length === users.length;
	// const isLoadMoreDisabled =
	// 	visibleUsers.length === users.length ||
	// 	(filter === "follow" &&
	// 		users.every(
	// 			(user) => localStorage.getItem(`activeState-${user.id}`) !== "false"
	// 		)) ||
	// 	(filter === "following" &&
	// 		users.every(
	// 			(user) => localStorage.getItem(`activeState-${user.id}`) !== "true"
	// 		));

	// Apply the selected filter to the visible users
	useEffect(() => {
		if (filter === "show-all") {
			setVisibleUsers(users.slice(0, usersPerPage));
		} else if (filter === "follow") {
			const filteredUsers = users.filter((user) => {
				const activeState = localStorage.getItem(`activeState-${user.id}`);
				return activeState === "false";
			});
			setVisibleUsers(filteredUsers.slice(0, usersPerPage));
		} else if (filter === "following") {
			const filteredUsers = users.filter((user) => {
				const activeState = localStorage.getItem(`activeState-${user.id}`);
				return activeState === "true";
			});
			setVisibleUsers(filteredUsers.slice(0, usersPerPage));
		}
		setCurrentPage(1);
	}, [filter, users]);

	return (
		<div>
			<Navigation>
				<BackButton to="/">Back</BackButton>

				<DropDown value={filter} onChange={handleFilterChange}>
					<option value="show-all">Show All</option>
					<option value="follow">Follow</option>
					<option value="following">Following</option>
				</DropDown>
			</Navigation>

			<CardList>
				{visibleUsers.map((user) => (
					<li key={user.id} style={{ listStyle: "none" }}>
						<Card user={user}></Card>
					</li>
				))}
			</CardList>
			<LoadMoreButton disabled={isLoadMoreDisabled} onClick={handleLoadMore}>
				{isLoadMoreDisabled ? "No more users" : "Load more"}
			</LoadMoreButton>
		</div>
	);
};
