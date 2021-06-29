import React, {useState} from 'react';

export function SignUp() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [dateofbirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [table, setTable] = useState (false);
    
    function showTable(event) {
        event.preventDefault();
        setTable(!table)
    }

    return(
        <div id = 'sign-up'>
            <h2>Sign Up Form</h2>
            <form onSubmit = {showTable}>
                <input
                    type = 'text'
                    placeholder = 'First name'
                    value = {firstName}
                    onChange = {e => {setFirstName(e.target.value)}}
                />
                <br/>
                <br/>
                <input
                    type = 'text'
                    placeholder = 'Last name'
                    value = {lastName}
                    onChange = {e => {setLastName(e.target.value)}}
                />
                <br/>
                <br/>
                <input
                    type = 'email'
                    placeholder = 'Email address'
                    value = {email}
                    onChange = {e => {setEmail(e.target.value)}}
                />
                <br/>
                <br/>
                <input
                    type = 'password'
                    placeholder = 'Password'
                    value = {password}
                    onChange = {e => {setPassword(e.target.value)}}
                />
                <br/>
                <br/>
                <input
                    type = 'tel'
                    placeholder = '07x-xxx-xxx'
                    pattern = {'[0-9]{3}-[0-9]{3}-[0-9]{3}'}
                    value = {mobile}
                    onChange = {e => {setMobile(e.target.value)}}
                />
                <br/>
                <br/>
                <input
                    type = 'date'
                    placeholder = 'Date of Birth'
                    value = {dateofbirth}
                    onChange = {e => {setDateOfBirth(e.target.value)}}
                />
                <br/>
                <br/>
                <input
                    type = 'text'
                    placeholder = 'Gender (optional)'
                    value = {gender}
                    onChange = {e => {setGender(e.target.value)}}
                />
                <br/>
                <br/>
                <button type = 'submit'>
                {table ? 'Hide Table' : 'Show Table'}
                </button>
            </form>


            {table && <table border = '2'>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Mobile</th>
                        <th>Date of birth</th>
                        <th>Gender</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                        <td>{mobile}</td>
                        <td>{dateofbirth}</td>
                        <td>{gender}</td>
                    </tr>
                </tbody>
            </table>}
        </div>
    )
}