import { Col, Row } from "react-bootstrap";
import { Product } from "../Components";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../utils/baseUrl";
const HomeScreen = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const getProducts = async () => {
			try {
				const { data } = await axios.get(`${baseUrl}/products`);
				setProducts(data);

				console.log(data);
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();

		return () => getProducts();
	}, []);

	return (
		<div>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col sm={12} md={6} lg={4} xl={3} key={product.id}>
						<Product product={product} key={product.id} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default HomeScreen;
