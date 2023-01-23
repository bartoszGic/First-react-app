
import ExpFilter from './ExpFilter'
import Card from '../UI/Card';
import React, { useState } from 'react';
import './Exp.css';
import ExpList from './ExpList';

function Exp(props) {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filtredExp = props.items.filter(exp => {
        return exp.date.getFullYear().toString() === filteredYear
    })


    return (
        <div>
            <Card className="expenses">
                <ExpFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
                <ExpList items={filtredExp} />
            </Card>
        </div>
    );
}

export default Exp;