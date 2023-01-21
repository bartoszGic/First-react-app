import './NewExp.css'
import ExpForm from './ExpForm'
const NewExp = (props) => {
    const saveExpDataHandler = (enteredExpData) => {
        const expData = {
            ...enteredExpData,
            id: Math.random().toString()
        }
        props.onAddExp(expData)
    }
    return (<div className='new-expense'>
        <ExpForm onSaveExpData={saveExpDataHandler} />
    </div>)
}
export default NewExp