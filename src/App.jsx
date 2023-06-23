import { Route, Routes } from "react-router-dom";
import { CardsList } from "./components/CardsList";
import { Home } from "./components/Home";

export const App = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/tweets" element={<CardsList />} />
		</Routes>
	);
};
