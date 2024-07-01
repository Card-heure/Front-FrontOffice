import {useNavigate} from 'react-router-dom';
import {useState} from "react";
import {TSignup} from "../../Types/TLogin.ts";
import {apiRequest} from "../../Utils/ApiRequest.ts";
import {TResponseLogin} from "../../Types/TResponseLogin.ts";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  function signUp(){
    const data:TSignup = {} as TSignup;
    data.fullName = name;
    data.email = email;
    data.password = password;
    apiRequest<TSignup, TResponseLogin>(`register`, 'POST', data).then((response) => {
      localStorage.setItem('jwt', response.response.token.token)
      localStorage.setItem('expire', response.response.token.expiresAt)
      navigate('/home')
    })
  }
  const toLogin = () => {
    navigate('/logIn')
  }

  return (
    <>
      <h1 className="text-[200%] text-center font-light w-[400px] mx-[auto] my-[75px]">Sign Up for Card'heure</h1>
      <div className="loginBox w-[700px] mx-[auto] p-[50px] border-[1px]  mb-[150px] border-[solid] border-[black] rounded-[40px] [box-shadow:-10px_11px_2px_rgb(199,_199,_201)]">
        <form action="#">
          <input placeholder={'Name'}
                 className={'text-[90%] text-center border-black border-[1px] rounded-[10px] w-[400px] py-[15px] mx-[auto] my-[50px] justify-center flex'}
                 type={'text'}
                 onChange={(e) => setName(e.target.value)}
          />
          <input placeholder={'Email'}
                 className={'text-[90%] text-center border-black border-[1px] rounded-[10px] w-[350px] py-[15px] mx-[auto] my-[50px] justify-center flex'}
                 type={'email'}
                 onChange={(e) => setEmail(e.target.value)}
          />
          <input placeholder={'Password'}
                 className={'text-[90%] text-center border-black border-[1px] py-[15px] w-[300px] rounded-[10px] mx-[auto] justify-center flex'}
                 type={'password'}
                 onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={'bg-black text-white px-[50px] py-[12px] rounded-[10px] mx-[auto] my-[50px] justify-center flex'}
            type="button"
            onClick={signUp}
          >
            Sign Up
          </button>
          <button className="w-[300px] text-center mx-[auto] justify-center flex font-light italic text-[85%] tracking-[.3px]"
                  onClick={toLogin}>
            Already have an account? Click <span className="font-medium"> &#160;here&#160; </span> to log in
          </button>
        </form>
      </div>
    </>
  )
}