import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import { HomeScreen } from "../Pages";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index={true} path="/" element={<HomeScreen />} />
		</Route>,
	),
);
