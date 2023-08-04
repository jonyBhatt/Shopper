import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
	return (
		<Card className="my-3 p-3 rounded">
			<Link to={`/product/${product.id}`} className="w-50 h-50 mx-auto">
				<Card.Img src={product.image} variant="top" />
			</Link>
			<Card.Body>
				<Link to={`/product/${product.id}`}>
					<Card.Title className="text-truncate text-muted text-decoration-none">
						{product.title}
					</Card.Title>
				</Link>
				<Card.Text as="p">
					$<b>{product.price}</b>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
