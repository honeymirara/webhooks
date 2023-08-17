import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function AuthPage() {
    const [form, setForm] = useState({ email: '', pwd: '' })
    const array = ['email', 'pwd']
    const result = array.map(el =>
        <div >
            <TextField name={el} id="standart-basic" label={el} variant="standard" onChange={changeForm} />
        </div>
    )

    function changeForm(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    async function show() {
        console.log(form);
        const response = await fetch('http://localhost:3000/api//authorize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(form)
        })

        const json = await response.json()
        console.log(json)
    }

    return (
        <div>
            <h1>Authorize</h1>
            {result}
            <div>
                <Button variant="outlined" onClick={show}>Outlined</Button>
            </div>
        </div>
    )
}