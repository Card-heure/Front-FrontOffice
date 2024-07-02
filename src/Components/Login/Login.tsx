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
    } else {
    }
  }

  const toSignup = () => {
    navigate("/signup")
  }

  return (
    <>
      <h1 className="text-[200%] text-center font-light w-[300px] mx-[auto] my-[75px]">Se connecter à Card'heure</h1>
      <div className="loginBox w-[700px] h-[500px] mx-[auto] p-[50px] border-[1px] border-[solid] border-[black] rounded-[40px] [box-shadow:-10px_11px_2px_rgb(199,_199,_201)]">
        <form action="#">
          <input {...register("email")} placeholder={'Email'} className={'text-[90%] text-center border-black border-[1px] rounded-[10px] w-[400px] py-[15px] mx-[auto] my-[50px] justify-center flex'} type={'email'}/>
          <input {...register("password")} placeholder={'Mot de passe'} className={'text-[90%] text-center border-black border-[1px] py-[15px] w-[300px] rounded-[10px] mx-[auto] justify-center flex'}
                 type={'password'}/>
          <button
            className={'bg-black text-white px-[40px] py-[10px] rounded-[10px] mx-[auto] my-[50px] justify-center flex'}
            type="button"
            onClick={() => {
              saveData()
            }}
          >
            Se connecter
          </button>
          <button className="w-[350px] text-center mx-[auto] justify-center flex font-light italic text-[85%] tracking-[.3px] flex-wrap"
                  onClick={toSignup}>
            Vous êtes un nouvel utilisateur ? Cliquez <span className="font-medium"> &#160;ici&#160; </span> pour créer un compte
          </button>
        </form>
      </div>
    </>
  )
}