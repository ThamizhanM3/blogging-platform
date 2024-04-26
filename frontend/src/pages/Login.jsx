import React, { useEffect, useState } from 'react';
import "../stylesheet/Login.css";
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
    const [userId, setuserId] = useState('');
    const [password, setPassword] = useState('');

    const handleUserId = (userId) => {
        setuserId(userId)
    }

    const handlePassword = (password) => {
        setPassword(password)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userId, password);
    }

    useEffect(() => {
        console.log( 'userId:', userId, 'password:', password)
    }, [userId, password])

    return (
        <div className='Login'>
            <form onSubmit={handleSubmit}>
                <Input 
                    element={userId}
                    type={'text'}
                    onChange={handleUserId}
                />
                <Input 
                    element={password}
                    type={'password'}
                    onChange={handlePassword}
                />
                <Button 
                    value={'Submit'}
                    type={'submit'}
                />
            </form>
        </div>
    )
}

export default Login
