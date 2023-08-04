import { Footer, Header } from "./Components";
import Container from "react-bootstrap/esm/Container";
// import { HomeScreen } from "./Pages";
import "./App.css";
import { Outlet } from "react-router-dom";
function App() {
	return (
		<>
			<Header />
			<main className="py-3">
				<Container>
					<Outlet />
				</Container>
			</main>
			<Footer />
		</>
	);
}

export default App;
