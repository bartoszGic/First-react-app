import './ExpList.css'
import ExpItem from './ExpItem';

const ExpList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__falback'>Found no expenses.</h2>
    }

    return (
        <ul className='expenses-list'>
            {props.items.map(exp => (
                <ExpItem
                    key={exp.id}
                    title={exp.title}
                    amount={exp.amount}
                    date={exp.date} />
            ))}
        </ul>
    )
}

export default ExpList