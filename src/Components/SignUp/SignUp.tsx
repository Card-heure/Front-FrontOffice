import {useNavigate} from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();

  const toSignUp = () => {
    navigate('/LogIn')
  }

  return (
    <>
      <h1 className="text-[200%] text-center font-light w-[400px] mx-[auto] my-[75px]">Sign Up for Card'heure</h1>
      <div className="loginBox w-[700px] mx-[auto] p-[50px] border-[1px]  mb-[150px] border-[solid] border-[black] rounded-[40px] [box-shadow:-10px_11px_2px_rgb(199,_199,_201)]">
        <form action="#">
          <input placeholder={'Email'}
                 className={'text-[90%] text-center border-black border-[1px] rounded-[10px] w-[400px] py-[15px] mx-[auto] my-[50px] justify-center flex'}
                 type={'email'}
          />
          <input placeholder={'Username'}
                 className={'text-[90%] text-center border-black border-[1px] rounded-[10px] w-[350px] py-[15px] mx-[auto] my-[50px] justify-center flex'}
                 type={'text'}
          />
          <input placeholder={'Password'}
                 className={'text-[90%] text-center border-black border-[1px] py-[15px] w-[300px] rounded-[10px] mx-[auto] justify-center flex'}
                 type={'password'}
          />
          <button
            className={'bg-black text-white px-[50px] py-[12px] rounded-[10px] mx-[auto] my-[50px] justify-center flex'}
            type="button"
            onClick={() => {

            }}
          >
            Sign Up
          </button>
          <button className="w-[300px] text-center mx-[auto] justify-center flex font-light italic text-[85%] tracking-[.3px]"
                  onClick={toSignUp}>
            Already have an account? Click <span className="font-medium"> &#160;here&#160; </span> to log in
          </button>
        </form>
      </div>
    </>
  )
}