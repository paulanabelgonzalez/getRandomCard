import {
	GiInvertedDice1,
	GiInvertedDice2,
	GiInvertedDice3,
	GiInvertedDice4,
	GiInvertedDice5,
	GiInvertedDice6,
} from "react-icons/gi";

// import "./dice.css";

export const Dice = ({ diceNumber }) => {
	return (
		<>
			{diceNumber === 1 && <GiInvertedDice1 className="dice" />}
			{diceNumber === 2 && <GiInvertedDice2 className="dice" />}
			{diceNumber === 3 && <GiInvertedDice3 className="dice" />}
			{diceNumber === 4 && <GiInvertedDice4 className="dice" />}
			{diceNumber === 5 && <GiInvertedDice5 className="dice" />}
			{diceNumber === 6 && <GiInvertedDice6 className="dice" />}
		</>
	);
};
