import React,{ useState }  from 'react';
import {Link} from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

function novoUsuario()
{
    return(
        <h1> Novo User </h1>
    )      
    
}

export default novoUsuario;