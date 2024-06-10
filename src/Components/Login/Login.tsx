import {useForm} from "react-hook-form"
import {TLogin} from "../../Types/TLogin.ts";
import {TResponseLogin} from "../../Types/TResponseLogin.ts";
import {apiRequest} from "../../Utils/ApiRequest.ts";
import {useNavigate} from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  

  const {register, getValues} = useForm<TLogin>()

  async function saveData() {
    const {response, status} = await apiRequest<TLogin, TResponseLogin>('login', 'POST', getValues())
    if (status === 200) {
      localStorage.setItem('jwt', response.token.token)
      localStorage.setItem('expire', response.token.expiresAt)
      navigate('/home')
    }else{
      console.error('Error', status)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="#">
        <input {...register("email")} placeholder={'Email'} className={'border-black border-2'} type={'email'}/>
        <input {...register("password")} placeholder={'Password'} className={'border-black border-2'}
               type={'password'}/>
        <button
          className={'bg-gray-300'}
          type="button"
          onClick={() => {
            saveData()
          }}
        >
          Login
        </button>
      </form>
    </div>
  )
}