import './NewExp.css'
import ExpForm from './ExpForm'
import React, { useState } from 'react'
const NewExp = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpDataHandler = (enteredExpData) => {
        const expData = {
            ...enteredExpData,
            id: Math.random().toString()
        }
        props.onAddExp(expData)
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (<div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpForm onSaveExpData={saveExpDataHandler} onStopEdit={stopEditingHandler} />}
    </div>)
}
export default NewExp