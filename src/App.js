
import Exp from './components/Exp/Exp'
import NewExp from './components/NewExp/NewExp';
function App() {
	const expenses = [
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
			date: new Date(2021, 3, 17),
		},
		{
			id: 'e4',
			title: 'New desk',
			amount: 234.56,
			date: new Date(2022, 7, 24),
		},
	];
	const addExpHandler = (exp) => {
		console.log('In App.js');
		console.log(exp);
	}
	return (
		<div>
			<NewExp onAddExp={addExpHandler} />
			<Exp items={expenses} />
		</div>
	);
}

export default App;
