import { useState } from "react";

import { CardContainer } from "./components/cardContainer/CardContainer";
import { RollButton } from "./components/rollButton/RollButton";

import "./App.css";

function App() {
	const [diceNumber, setDiceNumber] = useState(1);

	return (
		<>
			<RollButton diceNumber={diceNumber} setDiceNumber={setDiceNumber} />

			<CardContainer diceNumber={diceNumber} />
		</>
	);
}

export default App;
