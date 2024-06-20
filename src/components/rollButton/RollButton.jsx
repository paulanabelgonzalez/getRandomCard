import { Dice } from "../dice/Dice";

import "./rollButton.css";

export const RollButton = ({ diceNumber, setDiceNumber }) => {
	const handleRollDice = () => {
		let number = parseInt(Math.random() * 6 + 1);
		setDiceNumber(number);
	};

	return (
		<button className="roll_button" onClick={handleRollDice}>
			<Dice diceNumber={diceNumber} />
			Roll!
		</button>
	);
};
