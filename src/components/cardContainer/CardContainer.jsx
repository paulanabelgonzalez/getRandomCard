import { Card } from "../../components/card/Card";
import { Dice } from "../dice/Dice";

import card1 from "../../assets/card1-img.jpg";
import card2 from "../../assets/card2-img.jpg";
import card3 from "../../assets/card3-img.jpg";
import card4 from "../../assets/card4.jpg";
import card5 from "../../assets/card5.jpg";
import card6 from "../../assets/card6.jpg";

import "./cardContainer.css";

export const CardContainer = ({ diceNumber }) => {
	return (
		<div className="card_container">
			<h2 className="card_conteiner__text">
				El Resultado es: <Dice diceNumber={diceNumber} />
			</h2>

			{diceNumber === 1 && (
				<Card
					cardImg={card1}
					cardFooter="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam earum eligendi recusandae sit nam sed placeat. "
					cardButton="Comprar"
					diceNumber={diceNumber}
				/>
			)}

			{diceNumber === 2 && (
				<Card
					cardHeader="texto"
					cardImg={card2}
					cardButton="Comprar"
					diceNumber={diceNumber}
				/>
			)}

			{diceNumber === 3 && (
				<Card
					cardHeader="texto"
					cardImg={card3}
					cardFooter="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam earum eligendi recusandae sit nam sed placeat. "
					diceNumber={diceNumber}
				/>
			)}

			{diceNumber === 4 && (
				<Card
					cardHeader="texto"
					cardImg={card4}
					cardButton="Comprar"
					diceNumber={diceNumber}
				/>
			)}
			{diceNumber === 5 && (
				<Card
					cardHeader="texto"
					cardImg={card5}
					cardFooter="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam earum eligendi recusandae sit nam sed placeat. "
					diceNumber={diceNumber}
				/>
			)}

			{diceNumber === 6 && (
				<Card
					cardImg={card6}
					cardFooter="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam earum eligendi recusandae sit nam sed placeat. "
					cardButton="Comprar"
					diceNumber={diceNumber}
				/>
			)}
		</div>
	);
};
