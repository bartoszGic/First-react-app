import ExpDate from './ExpDate';
import Card from '../UI/Card';
import './ExpItem.css';

function ExpItem(props) {

	return (
		<ul>
			<Card className='expense-item'>
				<ExpDate date={props.date} />
				<div className='expense-item__description'>
					<h2>{props.title}</h2>
					<div className='expense-item__price'>${props.amount}</div>
				</div>
			</Card>
		</ul>
	);
}

export default ExpItem;