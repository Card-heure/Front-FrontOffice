export default function UserProfile() {
    const userName = "JeanDupoint";
    const firstName = "Jean";
    const lastName = "Dupoint"
    const emailAddress = "jeandupoint@outlook.com";
    const birthday = "01/01/1992";
    const gender = "Female";

    return (
        <>
            <div className = "greeting w-[75%] mx-[auto] flex mt-[85px] mb-[60px]">
                <h1 className = "text-[300%] mr-[30px]"> &#128075;</h1>
                <h1 className = "text-[200%] font-light"> Hello, {firstName} !</h1>
            </div>
            <div className="sections w-[80%] mx-[auto] flex justify-between mb-[250px]">

                <div className="sectionOne w-[24%] border-r-[6px] border-r-[black] border-r-[solid] py-[50px]">

                    <h1 className="text-[120%] mb-[5px]"> Username </h1>
                    <div className="editUsername flex items-start w-[68%]">
                    <textarea
                        className="changeUsername text-black text-[110%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px]"
                        placeholder={userName}>
                    </textarea>
                        <img src="/src/assets/pencilIcon.png"
                             className="w-[20px] h-[auto] pt-[11px]"
                        />
                    </div>

                    <h1 className="text-[120%] mb-[5px]"> First Name </h1>
                    <div className="editFirstName flex items-start w-[68%]">
                    <textarea
                        className="changeFirstName text-black text-[110%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px]"
                        placeholder={firstName}>
                    </textarea>
                        <img src="/src/assets/pencilIcon.png"
                             className="w-[20px] h-[auto] pt-[11px]"
                        />
                    </div>

                    <h1 className="text-[120%] mb-[5px]"> Last Name </h1>
                    <div className="editLastName flex items-start w-[68%]">
                    <textarea
                        className="changeLastName text-black text-[110%] font-extralight h-[40px] leading-[40px] outline-none resize-none"
                        placeholder={lastName}>
                    </textarea>
                        <img src="/src/assets/pencilIcon.png"
                             className="w-[20px] h-[auto] pt-[11px]"
                        />
                    </div>
                </div>

                <div className="sectionTwo w-[30%] border-r-[6px] border-r-[black] border-r-[solid] py-[50px]">
                    <h1 className="text-[120%] mb-[5px]"> Email </h1>
                    <div className="editEmailAddress flex items-start w-[75%]">
                    <textarea
                        className="changeEmailAddress text-black text-[110%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px] w-[300px]"
                        placeholder={emailAddress}>
                    </textarea>
                        <img src="/src/assets/pencilIcon.png"
                             className="w-[20px] h-[auto] pt-[11px]"
                        />
                    </div>

                    <h1 className="text-[120%] mb-[5px]"> Birthday </h1>
                    <div className="editBirthday flex items-start w-[75%]">
                        <input type="date"
                               className="changeBirthday text-gray-400 text-[110%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px] w-[300px]"
                               placeholder={birthday}
                        />
                        <img src="/src/assets/pencilIcon.png"
                             className="w-[20px] h-[auto] pt-[11px]"
                        />
                    </div>

                    <h1 className="text-[120%] mb-[5px]"> Gender </h1>
                    <div className="editGender flex items-start w-[75%]">
                        <button
                            className="changeBirthday text-start text-gray-400 text-[110%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px] w-[300px]">
                            {gender}
                        </button>
                        <img src="/src/assets/pencilIcon.png"
                             className="w-[20px] h-[auto] pt-[11px]"
                        />
                    </div>
                </div>

                <div className="sectionThree w-[34%] justify-center py-[50px]">
                    <div className="flex w-[90%] justify-center">
                        <img src="/src/assets/emailIcon.png"
                             className = "w-[80px] h-[auto]"/>
                    </div>
                    <h3 className = "text-[115%] w-[90%] text-center font-light leading-[50px] mb-[65px]"> Have a question, comment, or suggestion? Please feel free to
                        <span className = "font-medium">
                            <a href = "mailto:madison.owens32@gmail.com?subject=Card'heure Client Contact"> contact us</a>
                        </span> :)
                    </h3>
                    <button className="saveChanges font-medium text-[106%] w-[90%] mb-[25px]"> Save Changes </button>
                    <button className="logOut font-medium text-[106%] w-[90%] mb-[25px]"> Log Out </button>
                    <button className="deleteAccount font-medium text-[106%] text-red-600 w-[90%]"> Delete Account </button>
                </div>
            </div>
        </>
    )
}