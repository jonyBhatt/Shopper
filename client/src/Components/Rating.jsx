import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";

const Rating = ({ rate, text }) => {
	return (
		<div className="rating">
			<span>
				{rate >= 1 ? <FaStar /> : rate >= 0.5 ? <FaStarHalf /> : <FaRegStar />}
			</span>

			<span>
				{rate >= 2 ? <FaStar /> : rate >= 1.5 ? <FaStarHalf /> : <FaRegStar />}
			</span>

			<span>
				{rate >= 3 ? <FaStar /> : rate >= 2.5 ? <FaStarHalf /> : <FaRegStar />}
			</span>
			<span>
				{rate >= 4 ? <FaStar /> : rate >= 3.5 ? <FaStarHalf /> : <FaRegStar />}
			</span>
			<span>
				{rate >= 5 ? <FaStar /> : rate >= 4.5 ? <FaStarHalf /> : <FaRegStar />}
			</span>

			<span className="rating-text">{text && text} of reviews</span>
		</div>
	);
};

export default Rating;
