import React, {useState, useEffect} from 'react';
import { Input } from './Input';

export function Login() {

    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [comment, setComment] = useState('');
    const [inputType, setInputType] = useState('password'); 
    const [showComment, setShowComment] = useState(false); 


    useEffect(() => {
        console.log('Username:', username)
        console.log('Password:', password)
    }, [username, password])
    
    function toggleInput() {
        setInputType(
            inputType === 'password' ? 'text' : 'password'
        )
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Username: ${username} \nPassword: ${password}`)
    }


    return(
        <div id = 'login'>
            <form onSubmit = {handleSubmit}>
                <Input
                    type = 'text'
                    placeholder = 'Enter Username'
                    name = 'username'
                    value = {username}
                    onChange = {e => {setUsername(e.target.value)}}
                />
                <Input
                    type = {inputType}
                    placeholder = 'Enter Password'
                    name = 'password'
                    value = {password}
                    onChange = {e => {setPassword(e.target.value)}}
                    togglePassword = {toggleInput}
                />
                <Input
                type = 'text'
                placeholder = 'Enter comments'
                name = 'comment'
                value = {comment}
                onChange = {e => {setComment(e.target.value)}}
                showComment = {showComment}
                toggleComment = {() => {setShowComment(!showComment)}}
                />
                <button className = 'action-button'>
                    Sign In
                </button>
            </form>
        </div>
    )
}