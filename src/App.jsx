import { useState } from "react";

import { CardContainer } from "./components/cardContainer/CardContainer";
import { RollButton } from "./components/rollButton/RollButton";

import "./App.css";

function App() {
	const [diceNumber, setDiceNumber] = useState(1);

	const handleRollDice = () => {
		let number = parseInt(Math.random() * 6 + 1);
		setDiceNumber(number);
	};

	return (
		<>
			<RollButton diceNumber={diceNumber} rollDiceFunction={handleRollDice} />

			<CardContainer diceNumber={diceNumber} />
		</>
	);
}

export default App;
