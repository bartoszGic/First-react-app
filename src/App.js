import React, { useState } from 'react';
import Exp from './components/Exp/Exp'
import NewExp from './components/NewExp/NewExp';
const DUMMY_EXP = [
	{
		id: 'e1',
		title: 'Toilet paper',
		amount: 93.35,
		date: new Date(2019, 1, 12),
	},
	{
		id: 'e2',
		title: 'New TV',
		amount: 258.65,
		date: new Date(2020, 2, 3),
	},
	{
		id: 'e3',
		title: 'Car insurance',
		amount: 589.83,
		date: new Date(2022, 3, 17),
	},
	{
		id: 'e4',
		title: 'New desk',
		amount: 234.56,
		date: new Date(2022, 7, 24),
	},
];
function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXP)

	const addExpHandler = (exp) => {
		setExpenses((prevExpenses) => {
			return [exp, ...prevExpenses]
		})
	}
	return (
		<div>
			<NewExp onAddExp={addExpHandler} />
			<Exp items={expenses} />
		</div>
	);
}

export default App;
