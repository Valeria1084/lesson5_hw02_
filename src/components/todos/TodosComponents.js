import React, {useEffect, useState} from 'react';
import {getTodos} from "../../services";
import {TodoComponent} from "./TodoComponent";

function TodosComponents() {
    const [todos,setTodos]= useState([])
    useEffect(()=>{
        getTodos().then(value => setTodos([...value]))
    },[])

    return (
        <div>
            {
                todos.map(value =><TodoComponent item={value} key={value.item}/> )
            }
        </div>
    );
}

export  {TodosComponents};