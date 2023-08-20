import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
import axios from 'axios';

export default function RegPage() {
    const [form, setForm] = useState({ email: '', pwd: '', username: '' })
    const array = ['email', 'pwd', 'username']
    const result = array.map(el => <div>
        <TextField name={el} id="standart-basic" label={el} variant="standard" onChange={changeForm} />
    </div>
    )

    function changeForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    async function show() {
        /*  console.log(form);
         const response = await fetch('http://localhost:3000/api/register', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(form)
         })
  
         const json = await response.json()
         console.log(json);*/
        const result = await axios.post('http://localhost:3001/api/register', form)
        console.log(result.data);
    }

    return (
        <div>
            <h1>Registration</h1>
            {result}

            <div>
                <Button variant="outlined" onClick={show}>Outlined</Button>
            </div>
        </div>
    )
}
