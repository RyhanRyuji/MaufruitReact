import React from "react";
import axios from 'axios';

// API for login
export async function Login(){
    try{
        const response = await axios.get('  http://localhost:8000/Login');
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        return [];
    }
}
//API for register
export async function RegisterUser(data){
    const response = await axios.post('  http://localhost:8000/Register', {
        Register: data,
        
    });
    return response.data;
}