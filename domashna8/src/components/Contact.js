import React, {useState} from 'react';

export function Contact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [enableDisable, setEnableDisable] = useState(false);

    function showForm(event) {
       event.preventDefault();
       setEnableDisable(!enableDisable)
    }

    return(
        <div id = 'contact'>
          {enableDisable && <form>
            <label >
            F.Name: 
             <input
                type = 'text'
                value = {firstName}
                name = 'First Name'
                onChange = {e => {setFirstName(e.target.value)}}
             />
             </label>
             <br/>
             <br/>
             <label >
            L.Name: 
             <input
                type = 'text'
                value = {lastName}
                name = 'Last Name'
                onChange = {e => {setLastName(e.target.value)}}
             />
             </label>
             <br/>
             <br/>
             <label >
            Address: 
             <input
                type = 'text'
                value = {address}
                name = 'Address'
                onChange = {e => {setAddress(e.target.value)}}
             />
             </label>
             <br/>
             <br/>

             </form>}
            <br/>
            <form onSubmit = {showForm}>
               <button type = 'submit'>
                  {enableDisable ? 'Disable' : 'Enable'}
               </button>
            </form>
        </div>
    )
}