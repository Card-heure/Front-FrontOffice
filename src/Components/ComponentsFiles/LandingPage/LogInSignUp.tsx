import {useNavigate} from "react-router-dom";

export default function LogInSignUp() {
  const navigate = useNavigate();
    return (
        <>
            <div className = "w-[235px] mx-[auto] mt-[200px] items-center flex justify-between">
                <img src="/src/assets/clickIcon.png" className="w-[40px] h-[auto]"/>
                <h2 className="text-[180%] text-center"> Click below to</h2>
            </div>
            <div
                className="connectBox w-[500px] h-[200px] mb-[100px] mx-[auto] justify-between items-center flex text-[160%] font-light">
                <button
                    className="logInButton border-[1px] border-[solid] border-[black] px-[50px] py-[5px] rounded-[15px]"
                    id="logIn"
                    onClick={() => {
                        navigate("/LogIn")
                    }}
                >
                    Log In
                </button>

                <h3 className="italic font-medium text-[105%]"> or </h3>
                <button
                    className="signUpButton border-[1px] border-[solid] border-[black] px-[50px] py-[5px] rounded-[15px]"
                    id="signUp"
                    onClick={() => {
                        navigate("/SignUp")
                    }}
                >
                    Sign Up
                </button>
            </div>
        </>
    );
}