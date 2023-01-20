
import Exp from './components/Exp'

function App() {
	const expenses = [
		{
			id: 'e1',
			title: 'Toilet paper',
			amount: 93.35,
			date: new Date(2023, 1, 12),
		},
		{
			id: 'e2',
			title: 'New TV',
			amount: 258.65,
			date: new Date(2023, 2, 3),
		},
		{
			id: 'e3',
			title: 'Car insurance',
			amount: 589.83,
			date: new Date(2023, 3, 17),
		},
		{
			id: 'e4',
			title: 'New desk',
			amount: 234.56,
			date: new Date(2023, 7, 24),
		},
	];
	return (
		<div>
			<Exp items={expenses} />
		</div>
	);
}

export default App;
