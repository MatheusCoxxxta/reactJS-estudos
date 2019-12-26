import React,{ useState }  from 'react';
import './login.css';
import {Link} from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

function Login()
{
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function logar()
    {
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            alert('Logado');
        }).catch(erro => {
            alert(erro);
        });
    }
    return(
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email address" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />
            
                <button onClick={logar} class="btn btn-lg btn-block btn-login" type="button">Logar</button>
                
                <div className="msg-login text-white text-center mt-5">
                    <span> <strong> Wow! </strong> Você está conectado! &#128526;</span>
                    <br />
                    <span> <strong> Ops! </strong> Verifique se a senha ou usuário estão corretos! &#128546;</span>
                </div>

                <div className="opcoes-login mt-5 text-center">
                    <Link to='novoUsuario' href="#" className="mx-2"> Recuperar senha </Link>
                    <span className="text-white"> &#9733; </span>
                    <Link to='novoUsuario' className="mx-2"> Me cadastrar </Link>
                </div>
            </form>
        </div>
    )
}

export default Login;