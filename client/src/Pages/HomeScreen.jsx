import { Col, Row } from "react-bootstrap";
import { productData } from "../utils/ProductsData";
import { Product } from "../Components";
const HomeScreen = () => {
	return (
		<div>
			<h1>Latest Products</h1>
			<Row>
				{productData.map((product) => (
					<Col sm={12} md={6} lg={4} xl={3} key={product.id}>
						<Product product={product} key={product.id} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default HomeScreen;
