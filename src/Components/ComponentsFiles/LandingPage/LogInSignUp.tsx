import {useNavigate} from "react-router-dom";

export default function LogInSignUp() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[400px] mx-[auto] mt-[200px] items-center flex justify-center">
        <img src="/src/assets/clickIcon.png" className="w-[40px] h-[auto] mr-[6px]"/>
        <h2 className="text-[155%] text-center font-light ml-[6px]">Cliquez ci-dessous pour</h2>
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