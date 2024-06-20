import "./card.css";

export const Card = ({
	cardHeader,
	cardFooter,
	cardImg,
	cardButton,
	diceNumber,
}) => {
	return (
		<div className="card ">
			<h3 className="card_title">Hola! Soy card {diceNumber}</h3>
			{cardHeader && <p className="card_header">{cardHeader}</p>}
			{cardImg && <img src={cardImg} alt="imagen Card" className="card_img" />}
			{cardFooter && <p className="card_footer">{cardFooter}</p>}
			{cardButton && <button className="card_button">{cardButton}</button>}
		</div>
	);
};
