import Movie from "./Movie";
import "./MovieList.css";
export default function MovieList({ movies }) {
	return (
		<article className="mt-4">
			<h2 className="text-center mb-4">Movie List</h2>
			<section className="movie-list d-flex flex-wrap justify-content-center">
				{movies.map((movie) => {
					return (
						<Movie
							key={movie.title}
							title={movie.title}
							image={movie.image}
							description={movie.description}
						/>
					);
				})}
			</section>
		</article>
	);
}
