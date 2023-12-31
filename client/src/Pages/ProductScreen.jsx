import { Link, useParams } from "react-router-dom";

import { BiLeftArrowCircle } from "react-icons/bi";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import Rating from "../Components/Rating";
import { FaCartPlus } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrl";

const ProductScreen = () => {
	const [product, setProduct] = useState({});
	const { id: productId } = useParams();
	// console.log(product);
	useEffect(() => {
		const getProducts = async () => {
			try {
				const { data } = await axios.get(`${baseUrl}/products/${productId}`);
				setProduct(data);
				// console.log(product);

				// console.log(data);
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();

		return () => getProducts();
	}, [product, productId]);
	return (
		<div className="bg-white" style={{ height: "100vh" }}>
			<Link to="/" className=" btn fw-bold ">
				<BiLeftArrowCircle size={30} />
			</Link>
			<Row>
				<Col md={5} className="ml-4">
					<Image src={product.image} alt="Product Image" fluid />
				</Col>
				<Col md={4}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{product.title}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<span>{product.description}</span>
						</ListGroup.Item>
						<ListGroup.Item>
							{product.rating && (
								<Rating
									rate={product.rating.rate}
									text={product.rating.count}
								/>
							)}

							{/* {product.rating.rate} {product.rating.count} */}
						</ListGroup.Item>
						<ListGroup.Item>
							<p className="fs-7">
								<strong>Price:</strong> ${product.price}
							</p>
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card className="">
						<Card.Body>
							<Card.Text as="h6">
								Price: <strong>${product.price}</strong>
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<Button
								type="submit"
								variant="warning"
								className="d-flex align-items-center gap-2">
								<FaCartPlus />
								Add to cart
							</Button>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default ProductScreen;
