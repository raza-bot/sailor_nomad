import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
	return (
		<>
			<li className="cards__item">
				<Link className="cards__item__link" target="_blank" to={props.path}>
					<a href={props.path} target="_blank">
					<figure className="cards__item__pic-wrap" data-category={props.label}>
						<img src={props.src} className="cards__item__img" alt="Travel Img"/>
					</figure>
					<div className="cards__item__info">
						<h5 className="cards__item__text">{props.text}</h5>
					</div>
					</a>
				</Link>
			</li>
		</>
	);
}

export default CardItem;
