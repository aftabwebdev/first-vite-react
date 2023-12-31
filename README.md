### Proper way to use useEffect

```js
const Products = () => {
	const [isLoding, setIsLoding] = useState(true);
	const [isError, setIsError] = useState(false);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(api);
				if (!response.ok) {
					setIsError(true);
					setIsLoding(false);
					return;
				}
				const products = await response.json();
				console.log(response);
				setProducts(products);
			} catch (error) {
				setIsError(true);
			}
			setIsLoding(false);
		};

		setTimeout(() => {
			fetchData();
		}, 3000);
	}, []);

	// Conditions must be used after useEffect hook while useing creste-react-app.
	if (isLoding) {
		return <h2 style={{ textAlign: "center" }}>Loding...</h2>;
	}
	if (isError) {
		return <h2 style={{ textAlign: "center" }}>Data not found</h2>;
	}

	return (
		<>
			<h1>Products</h1>
			<div className="cards">
				{products.map((product, index) => {
					return <Product {...product} key={product.id} number={index} />;
				})}
			</div>
		</>
	);
};
export default Products;
```
