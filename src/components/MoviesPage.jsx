import Header from "./Header";
import MovieList from "./MovieList";

const movies = [
	{
		title: "The Shawshank Redemption",
		image: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
		description: "A story of hope and resilience in prison.",
	},
	{
		title: "The Godfather",
		image:
			"https://m.media-amazon.com/images/I/81fLQdNyHYS._AC_UF1000,1000_QL80_.jpg",
		description: "A powerful mafia drama by Francis Ford Coppola.",
	},
	{
		title: "The Dark Knight",
		image:
			"https://m.media-amazon.com/images/I/81CLFQwU-WL._AC_UF1000,1000_QL80_.jpg",
		description: "Batman faces the Joker in this epic superhero film.",
	},
	{
		title: "Pulp Fiction",
		image:
			"https://m.media-amazon.com/images/I/718LfFW+tIL._AC_UF894,1000_QL80_.jpg",
		description: "A series of interconnected stories in a crime saga.",
	},
	{
		title: "Forrest Gump",
		image:
			"https://m.media-amazon.com/images/I/713xd8jGVuL._AC_UF1000,1000_QL80_.jpg",
		description: "The extraordinary life journey of Forrest Gump.",
	},
	{
		title: "Inception",
		image:
			"https://m.media-amazon.com/images/I/71DwIcSgFcS._AC_UF1000,1000_QL80_.jpg",
		description: "A mind-bending thriller by Christopher Nolan.",
	},
	{
		title: "Fight Club",
		image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
		description: "An insomniac forms an underground fight club.",
	},
	{
		title: "The Matrix",
		image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
		description: "A hacker discovers the reality-bending truth of his world.",
	},
	{
		title: "Gladiator",
		image:
			"https://m.media-amazon.com/images/I/71uHO83rh4L._AC_UF894,1000_QL80_.jpg",
		description: "A betrayed general seeks revenge in ancient Rome.",
	},
	{
		title: "Titanic",
		image:
			"https://m.media-amazon.com/images/I/610CYrdV7AS._AC_UF1000,1000_QL80_.jpg",
		description: "A romance blossoms aboard the ill-fated ship.",
	},
];

export default function MoviePage() {
	return (
		<>
			<Header />
			<MovieList movies={movies} />
		</>
	);
}
