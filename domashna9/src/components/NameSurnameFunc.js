import React,{useEffect} from 'react';
import {nameSurname} from './../actions/NameSurnameAction';
import {useDispatch,useSelector} from 'react-redux';

export function NameSurnameFunc(){

        const dispatch = useDispatch();
        const person = useSelector(state=> state.NameSurnameReducer.person);

    useEffect(()=>{
        dispatch(nameSurname())
    },[dispatch])

    return(
        <div id="name-surname-func">
            <h2>{person}</h2>
        </div>
    )
}