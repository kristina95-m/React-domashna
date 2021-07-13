import React, {useState} from 'react';

export function About() {

    const [studentID, setStudentID] = useState('');
    const [city, setCity] = useState('');
    const [DOB, setDOB] = useState('');
    const [GPA, setGPA] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        alert(`StudentID: ${studentID} \n City: ${city} \n DOB: ${DOB} \n GPA: ${GPA}`)
    }

    return(
        <div id = 'about'>
            <form onSubmit = {handleSubmit}>
                <label>
                    StudentID: 
                <input
                    type = 'text'
                    name = 'studentID'
                    value = {studentID}
                    onChange = {e => setStudentID(e.target.value)}
                />
                </label>
                <br/>
                <br/>
                <label>
                    City: 
                <input
                    type = 'text'
                    name = 'city'
                    value = {city}
                    onChange = {e => setCity(e.target.value)}
                />
                </label>
                <br/>
                <br/>
                <label>
                    DOB: 
                <input
                    type = 'text'
                    name = 'DOB'
                    value = {DOB}
                    onChange = {e => setDOB(e.target.value)}
                />
                </label>
                <br/>
                <br/>
                <label>
                    G.P.A 
                <input
                    type = 'text'
                    name = 'GPA'
                    value = {GPA}
                    onChange = {e => setGPA(e.target.value)}
                />
                </label>
                <br/>
                <br/>
                <button>Alert!</button>
            </form>
        </div>
    )
}