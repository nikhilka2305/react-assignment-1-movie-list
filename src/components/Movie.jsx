import "./Movie.css";

export default function Movie({ title, image, description }) {
	return (
		<div className="card ">
			<img src={image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
			</div>
		</div>
	);
}
