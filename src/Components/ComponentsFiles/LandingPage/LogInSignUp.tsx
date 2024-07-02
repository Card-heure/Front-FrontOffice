import {useNavigate} from "react-router-dom";

export default function LogInSignUp() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[215px] mx-[auto] mt-[200px] items-center flex justify-between">
        <img src="/src/assets/clickIcon.png" className="w-[40px] h-[auto]"/>
        <h2 className="text-[165%] text-center font-light">Cliquez ci-dessous pour</h2>
      </div>
      <div
        className="connectBox w-[500px] h-[150px] mb-[100px] mx-[auto] justify-between items-center flex text-[130%] font-light">
        <button
          className="logInButton border-[1px] border-[solid] border-[black] px-[50px] py-[5px] rounded-[15px]"
          id="logIn"
          onClick={() => {
            navigate("/login")
          }}
        >
          Se connecter
        </button>

        <h3 className="italic font-medium text-[105%]"> ou </h3>
        <button
          className="signUpButton border-[1px] border-[solid] border-[black] px-[50px] py-[5px] rounded-[15px]"
          id="signUp"
          onClick={() => {
            navigate("/signup")
          }}
        >
          S'inscrire
        </button>
      </div>
    </>
  );
}