const Product = ({ id, name, image, priceCents, rating, number }) => {
	return (
		<article className="card product">
			<div className="badge">
				<span>{number + 1}</span>
			</div>
			<div className="image">
				<img src={image} alt={name} />
			</div>
			<h3>{name}</h3>
			<p>${(priceCents / 100).toFixed(2)}</p>
		</article>
	);
};
export default Product;
