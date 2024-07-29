import logo from "../assets/movies-clapperboard.svg";
import "./Header.css";
export default function Header() {
	return (
		<nav className="navbar bg-dark ">
			<div className="container-fluid d-flex text-white justify-content-start">
				<a className="navbar-brand" href="#">
					<img
						src={logo}
						alt="My Favourite MOvies"
						width="80"
						// height="48"
						className="d-inline-block align-text-top"
					/>
				</a>
				<h1>My Favourite Movies</h1>
			</div>
		</nav>
	);
}
