export default function UserProfile() {
    const userName = "JeanDupoint";
    const firstName = "Jean";
    const lastName = "Dupoint"
    const emailAddress = "jeandupoint@outlook.com";
    const birthday = "1/1/1992";
    const gender = "female";

    return (
        <>
            <div className = "greeting w-[50%] mx-[auto] flex items-center justify-center mt-[75px] mb-[150px]">
                <h1 className = "text-[300%] mr-[30px]"> &#128075;</h1>
                <h1 className = "text-[250%] font-light"> Hello, User !</h1>
            </div>
            <div className = "sections w-[75%] mx-[auto] flex justify-between mb-[250px]">
                <div className="sectionOne w-[28%] border-r-[6px] border-r-[black] border-r-[solid] py-[50px]">
                    <h1 className="text-[150%] mb-[5px]"> Username </h1>
                    <textarea
                        className="changeUsername text-black text-[130%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px]"
                        placeholder={userName}>
                    </textarea>

                    <h1 className="text-[150%] mb-[5px]"> First Name </h1>
                    <textarea
                        className="changeUsername text-black text-[130%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px]"
                        placeholder={firstName}>
                    </textarea>

                    <h1 className="text-[150%] mb-[5px]"> Last Name </h1>
                    <textarea
                        className="changeUsername text-black text-[130%] font-extralight h-[40px] leading-[40px] outline-none resize-none"
                        placeholder={lastName}>
                    </textarea>
                </div>

                <div className="sectionTwo w-[30%] border-r-[6px] border-r-[black] border-r-[solid] py-[50px]">
                    <h1 className="text-[150%] mb-[5px]"> Email </h1>
                    <textarea
                        className="changeUsername text-black text-[130%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px]"
                        placeholder={emailAddress}>
                    </textarea>

                    <h1 className="text-[150%] mb-[5px]"> Birthday </h1>
                    <textarea
                        className="changeUsername text-black text-[130%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px]"
                        placeholder={birthday}>
                    </textarea>

                    <h1 className="text-[150%] mb-[5px]"> Gender </h1>
                    <textarea
                        className="changeUsername text-black text-[130%] font-extralight h-[40px] leading-[40px] outline-none resize-none"
                        placeholder={gender}>
                    </textarea>
                </div>

                <div className="sectionThree w-[36%] justify-center py-[50px]">
                    <div className = "flex w-[90%] justify-center">
                        <img src="/src/assets/emailIcon.png"
                        className = "w-[80px] h-[auto]"/>
                    </div>
                    <h3 className = "text-[140%] w-[90%] text-center font-light leading-[50px] mb-[65px]"> Have a question, comment, or suggestion? Please feel free to
                        <span className = "font-medium">
                            <a href = "mailto:madison.owens32@gmail.com?subject=Card'heure Client Contact"> contact us</a>
                        </span> :)
                    </h3>
                    <button className="font-medium text-[140%] w-[90%] mb-[25px]"> Save Changes </button>
                    <button className="font-medium text-[140%] w-[90%] mb-[25px]"> Log Out </button>
                    <button className="font-medium text-[140%] text-red-600 w-[90%]"> Delete Account </button>
                </div>
            </div>
        </>
    )
}