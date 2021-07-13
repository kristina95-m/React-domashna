import React, {useState} from 'react';

export function Home() {

   

    const [dates, setDates] = useState(
        [
            {id: 0, day:1, month: 'June', year: 1999, delete: ''},
            {id: 1, day: 2, month: 'July', year: 2000, delete: ''},
            {id: 2, day: 3, month: 'May', year: 2002, delete: ''}
            
        ]
        );

        const [newDate, setNewDate] = useState('');
       

        function addDate(){
                    let newObject = {
                        id: dates.length + 1,
                        day: newDate,
                        month: newDate,
                        year: newDate
                    }
    
                    setDates([
                        ...dates, newObject
                    ]);
                    setNewDate('');
                }




        function deleteDate(id) {
            setDates(
                [
                    ...dates.filter(item => item.id !== id)
                ]
             )
        }

        

    return(
        <div id = 'home'>
            <label >
            Day: {dates.day}
             <input
                type = 'text'
                value = {dates.day}
                onChange = {e => {setDates(e.target.value)}}
             />
             </label>
             <br/>
             <br/>
             <label >
            Month: {dates.month}
             <input
                type = 'text'
                value = {dates.month}
                onChange = {e => {setDates(e.target.value)}}
             />
             </label>
             <br/>
             <br/>
             <label >
            Year: {dates.year}
             <input
                type = 'text'
                value = {dates.year}
                onChange = {e => {setDates(e.target.value)}}
             />
             </label>
             <br/>
             <br/>
        
             <button onClick = {addDate}>
                 Add date
             </button>
             <br/>
             <br/>
             <table border = '1'>
                 <thead>
                     <tr>
                         <th>day</th>
                         <th>month</th>
                         <th>year</th>
                         <th>delete</th>
                     </tr>
                 </thead>

                 <tbody>
                     {dates.map(date => {
                         return(
                             <tr key = {date.id}>
                                 <td>{date.day}</td>
                                 <td>{date.month}</td>
                                 <td>{date.year}</td>
                                 <td><button onClick = {() => deleteDate(date.id)}>delete</button></td>
                             </tr>
                         )
                     })

                     }
                 </tbody>

             </table>
                
             
        </div>
    )
    
}