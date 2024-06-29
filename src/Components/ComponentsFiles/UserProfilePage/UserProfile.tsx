export default function UserProfile() {
    const userName = "JeanDupoint";
    const firstName = "Jean";
    const lastName = "Dupoint"
    const emailAddress = "jeandupoint@outlook.com";
    const birthday = "01/01/1992";
    const gender = "female";

    return (
        <>
            <div className = "greeting w-[75%] mx-[auto] flex mt-[105px] mb-[90px]">
                <h1 className = "text-[300%] mr-[30px]"> &#128075;</h1>
                <h1 className = "text-[250%] font-light"> Hello, {firstName} !</h1>
            </div>
            <div className="sections w-[75%] mx-[auto] flex justify-between mb-[250px]">
                <div className="sectionOne w-[26%] border-r-[6px] border-r-[black] border-r-[solid] py-[50px]">


                    <h1 className="text-[150%] mb-[5px]"> Username </h1>
                    <div className="editUsername flex items-start w-[80%]">
                    <textarea
                        className="changeUsername text-black text-[130%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px]"
                        placeholder={userName}>
                    </textarea>
                        <img src="/src/assets/pencilIcon.png"
                             className="w-[25px] h-[auto] py-[6px]"
                        />
                    </div>

                    <h1 className="text-[150%] mb-[5px]"> First Name </h1>
                    <div className="editFirstName flex items-start w-[80%]">
                    <textarea
                        className="changeFirstName text-black text-[130%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px]"
                        placeholder={firstName}>
                    </textarea>
                        <img src="/src/assets/pencilIcon.png"
                             className="w-[25px] h-[auto] py-[6px]"
                        />
                    </div>

                    <h1 className="text-[150%] mb-[5px]"> Last Name </h1>
                    <div className="editLastName flex items-start w-[80%]">
                    <textarea
                        className="changeLastName text-black text-[130%] font-extralight h-[40px] leading-[40px] outline-none resize-none"
                        placeholder={lastName}>
                    </textarea>
                        <img src="/src/assets/pencilIcon.png"
                             className="w-[25px] h-[auto] py-[6px]"
                        />
                    </div>
                </div>

                <div className="sectionTwo w-[32%] pl-[20px] border-r-[6px] border-r-[black] border-r-[solid] py-[50px]">
                    <h1 className="text-[150%] mb-[5px]"> Email </h1>
                    <div className="editEmailAddress flex items-start">
                    <textarea
                        className="changeEmailAddress text-black text-[130%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px] w-[300px]"
                        placeholder={emailAddress}>
                    </textarea>
                        <img src="/src/assets/pencilIcon.png"
                             className="w-[25px] h-[auto] py-[6px]"
                        />
                    </div>

                    <h1 className="text-[150%] mb-[5px]"> Birthday </h1>
                    <div className="editBirthday flex items-start">
                        <input type="date"
                               className="changeBirthday text-black text-[130%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px] w-[300px]"
                               placeholder={birthday}
                        />
                        <img src="/src/assets/pencilIcon.png"
                             className="w-[25px] h-[auto] py-[6px]"
                        />
                    </div>

                    <h1 className="text-[150%] mb-[5px]"> Gender </h1>
                    <div className="editGender flex items-start">
                    <textarea
                        className="changeGender text-black text-[130%] font-extralight h-[40px] leading-[40px] outline-none resize-none w-[300px]"
                        placeholder={gender}>
                    </textarea>
                    <img src="/src/assets/pencilIcon.png"
                         className="w-[25px] h-[auto] py-[6px]"
                    />
                    </div>
                </div>

                <div className="sectionThree w-[34%] justify-center py-[50px] pl-[20px]">
                    <div className="flex w-[90%] justify-center">
                    <img src="/src/assets/emailIcon.png"
                        className = "w-[80px] h-[auto]"/>
                    </div>
                    <h3 className = "text-[140%] w-[90%] text-center font-light leading-[50px] mb-[65px]"> Have a question, comment, or suggestion? Please feel free to
                        <span className = "font-medium">
                            <a href = "mailto:madison.owens32@gmail.com?subject=Card'heure Client Contact"> contact us</a>
                        </span> :)
                    </h3>
                    <button className="saveChanges font-medium text-[140%] w-[90%] mb-[25px]"> Save Changes </button>
                    <button className="logOut font-medium text-[140%] w-[90%] mb-[25px]"> Log Out </button>
                    <button className="deleteAccount font-medium text-[140%] text-red-600 w-[90%]"> Delete Account </button>
                </div>
            </div>
        </>
    )
}