import React, {useState} from 'react';
import {Training} from './Training';

export function App() {

    const [peopleList, setPeopleList] = useState(
        [
            {id:1,name:"Pero",lastName:"Perovski",year:1996},
            {id:2,name:"Ivan",lastName:"Ivanovski",year:1997},
            {id:3,name:"Stefan",lastName:"Stefanovski",year:1998}
          ]
    
    );

    const [newPerson, setNewPerson] = useState('');

    function addPerson() {
        let newMember = {
            id: peopleList.length + 1,
            name: newPerson.name,
            lastName: newPerson.lastName,
            year: newPerson.year
        }

        setPeopleList([
            ...peopleList, newMember
        ]);
        setNewPerson('');
    }
    


    return(
        <div id = 'app'>
            <h2>My App</h2>
            <Training people = {peopleList}/>
            <br/>
            <br/>
            <button onClick = {addPerson}>
                Add Person
            </button>
        </div>
    )
}