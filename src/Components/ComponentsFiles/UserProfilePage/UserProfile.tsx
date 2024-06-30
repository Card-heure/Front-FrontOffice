import {useState} from "react";

export default function UserProfile() {
    const [userName, setUserName] = useState("JeanDupoint");
    const [firstName, setFirstName] = useState("Jean");
    const [lastName, setLastName] = useState("Dupoint");
    const [emailAddress, setEmailAddress] = useState("jeandupoint@outlook.com");
    const [birthday, setBirthday] = useState("2001-12-19");
    const [gender, setGender] = useState("Female");
    const [showGender, setShowGender] = useState("genderSelectionMenu hidden w-[250px] rounded-[10px] p-[25px] border-[1px] border-[solid] border-[black] text-[115%] font-light leading-[40px]")
    const [genderHidden, setGenderHidden] = useState(true);
    const [updatedUserName, setUpdatedUserName] = useState(userName);
    const [updatedFirstName, setUpdatedFirstName] = useState(firstName);
    const [updatedLastName, setUpdatedLastName] = useState(lastName);
    const [updatedEmailAddress, setUpdatedEmailAddress] = useState(emailAddress);
    const [updatedBirthday, setUpdatedBirthday] = useState(birthday);
    const [updatedGender, setUpdatedGender] = useState(gender);


    const genderMenu = () => {
        if (genderHidden) {
            setShowGender("genderSelectionMenu w-[250px] rounded-[10px] p-[25px] border-[1px] border-[solid] border-[black] text-[115%] font-light leading-[40px]");
            setGenderHidden(false);
        }
        if (!genderHidden) {
            setShowGender("genderSelectionMenu hidden w-[250px] rounded-[10px] p-[25px] border-[1px] border-[solid] border-[black] text-[115%] font-light leading-[40px]");
            setGenderHidden(true);
        }
    };

    // @ts-ignore
    const changeUserName = (event) => {
        setUpdatedUserName(event.target.value);
    };

    // @ts-ignore
    const changeFirstName = (event) => {
        setUpdatedFirstName(event.target.value);
    };

    // @ts-ignore
    const changeLastName = (event) => {
        setUpdatedLastName(event.target.value);
    };

    // @ts-ignore
    const changeEmailAddress = (event) => {
        setUpdatedEmailAddress(event.target.value);
    };

    // @ts-ignore
    const changeBirthday = (event) => {
        setUpdatedBirthday(event.target.value);
    };

    // @ts-ignore
    const selectGender = (event) => {
        setUpdatedGender(event.target.value);
        setGenderHidden(true);
        setShowGender("genderSelectionMenu hidden w-[250px] rounded-[10px] p-[25px] border-[1px] border-[solid] border-[black] text-[115%] font-light leading-[40px]");
    };

    const saveChanges = () => {
        console.log("save changes")

        setUserName(updatedUserName);
        setFirstName(updatedFirstName);
        setLastName(updatedLastName);
        setEmailAddress(updatedEmailAddress);
        setBirthday(updatedBirthday);
        setGender(updatedGender);

        console.log(updatedUserName);
        console.log(updatedFirstName);
        console.log(updatedLastName);
        console.log(updatedEmailAddress);
        console.log(updatedBirthday);
        console.log(updatedGender);

    };

    const logOut = () => {
        console.log("log out")
    };

    const deleteAccount = () => {
        console.log("delete account")
    };

    return (
        <>
            <div className = "greeting w-[75%] mx-[auto] flex mt-[85px] mb-[60px]">
                <h1 className = "text-[300%] mr-[30px]"> &#128075;</h1>
                <h1 className = "text-[200%] font-light"> Hello, {firstName} !</h1>
            </div>
            <div className="sections w-[83%] mx-[auto] flex justify-between mb-[250px] pl-[3%]">

                <div className="sectionOne w-[26%] border-r-[3px] border-r-[black] border-r-[solid] py-[50px]">

                    <h1 className="text-[120%] mb-[5px]"> Username </h1>
                    <div className="editUsername flex items-start w-[68%]">
                    <textarea
                        className="changeUsername text-black text-[110%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px]"
                        onChange = {changeUserName}
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
                        onChange = {changeFirstName}
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
                        onChange = {changeLastName}
                        placeholder={lastName}>
                    </textarea>
                        <img src="/src/assets/pencilIcon.png"
                             className="w-[20px] h-[auto] pt-[11px]"
                        />
                    </div>
                </div>

                <div className="sectionTwo w-[34%] border-r-[3px] border-r-[black] border-r-[solid] py-[50px]">
                    <h1 className="text-[120%] mb-[5px]"> Email </h1>
                    <div className="editEmailAddress flex items-start w-[75%]">
                    <textarea
                        className="changeEmailAddress text-black text-[110%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px] w-[300px]"
                        onChange = {changeEmailAddress}
                        placeholder={emailAddress}>
                    </textarea>
                        <img src="/src/assets/pencilIcon.png"
                             className="w-[20px] h-[auto] pt-[11px]"
                        />
                    </div>

                    <h1 className="text-[120%] mb-[5px]"> Birthday </h1>
                    <div className="editBirthday flex items-start w-[75%]">
                        <input type="date"
                               className="changeBirthday text-[110%] text-gray-400 font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px] w-[300px]"
                               onChange={changeBirthday}
                               value={updatedBirthday}
                        />
                        <img src="/src/assets/pencilIcon.png"
                             className="w-[20px] h-[auto] pt-[11px]"
                        />
                    </div>

                    <h1 className="text-[120%] mb-[5px]"> Gender </h1>
                    <div className="editGender flex items-start w-[75%]">
                        <button
                            className="changeBirthday text-start text-gray-400 text-[110%] font-extralight h-[40px] leading-[40px] outline-none resize-none mb-[45px] w-[300px]"
                            onClick = {genderMenu}
                        >
                            {updatedGender}
                        </button>
                        <img src="/src/assets/pencilIcon.png"
                             className="w-[20px] h-[auto] pt-[11px]"
                        />
                    </div>
                    <form className ={showGender}>
                    <input type="radio" id="femaleButton" value="Female" name="genderSelectionMenu" onClick={selectGender}/>
                        <label htmlFor="femaleButton" className = "ml-[15px]"> Female </label>
                    <br/>
                    <input type="radio" id="maleButton" value="Male" name="genderSelectionMenu" onClick={selectGender} />
                        <label htmlFor="maleButton" className = "ml-[15px]"> Male </label>
                    <br/>
                    <input type="radio" id="nonBinaryeButton" value="Non-Binary" name="genderSelectionMenu" onClick={selectGender}/>
                        <label htmlFor="nonBinaryButton" className = "ml-[15px]"> Non-Binary </label>
                    <br/>
                    <input type="radio" id="otherButton" value="Other" name="genderSelectionMenu" onClick={selectGender}/>
                        <label htmlFor="otherButton" className = "ml-[15px]"> Other </label>
                    </form>
                </div>

                <div className="sectionThree w-[34%] justify-center py-[50px] pl-[1%]">
                    <div className="flex w-[90%] justify-center">
                        <img src="/src/assets/emailIcon.png"
                             className = "w-[80px] h-[auto]"/>
                    </div>
                    <h3 className = "text-[115%] w-[90%] text-center font-light leading-[50px] mb-[65px]"> Have a question, comment, or suggestion? Please feel free to
                        <span className = "font-medium">
                            <a href = "mailto:madison.owens32@gmail.com?subject=Card'heure Client Contact"> contact us</a>
                        </span> :)
                    </h3>

                    <button className="saveChanges font-medium text-[106%] w-[90%] mb-[25px]" onClick = {saveChanges}>
                        Save Changes
                    </button>

                    <button className="logOut font-medium text-[106%] w-[90%] mb-[25px]" onClick = {logOut}>
                        Log Out
                    </button>

                    <button className="deleteAccount font-medium text-[106%] text-red-600 w-[90%]" onClick = {deleteAccount}>
                        Delete Account
                    </button>

                </div>
            </div>
        </>
    )
}