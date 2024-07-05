import {useEffect, useState} from "react";
import {TSubject} from "../../../Types/TSubject.ts";
import {apiRequest} from "../../../Utils/ApiRequest.ts";

export default function HomePage() {

  const [subjects, setSubjects] = useState<TSubject[] | null>(null)
  const [filteredSubjects, setFilteredSubjects] = useState<TSubject[] | null>(null)
  useEffect(() => {
    apiRequest<null, TSubject[]>('api/subjects', 'GET').then((response) => {
      setSubjects(response.response)
      setFilteredSubjects(response.response)
    })
  }, [])


  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (event: { target: { value: any; }; }) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    const filteredSubjects = subjects!.filter((subject) => subject.name.toLowerCase().includes(inputValue.toLowerCase()));
    setFilteredSubjects(filteredSubjects);
  };

  const [sortOptionsHidden, setSortOptionsHidden] = useState(true);
  // 1st constant = what will be updated, 2nd is what will update it, useState = initial value before update
  const [sortType, setSortType] = useState("Les sujets les plus récents d'abord");

  const toggleSortOptions = () => {
    setSortOptionsHidden(!sortOptionsHidden); // the "!" means that it will set the boolean value to the opposite of whatever it currently is
  };

  const sortSubjects = (type: string) => {
    const sortedSubjects: TSubject[] = [...subjects!]; // the ellipses mean that "subjects" is an array (creating a new constant -sortedSubjects-
    // which copies the subjects array
    switch (type) {
      case "Les sujets les plus récents d'abord":
        sortedSubjects.sort((a, b) => b.createdAt > a.createdAt ? 1 : -1);
        break;
      case "Les sujets les plus anciens d'abord":
        sortedSubjects.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1);
        break;
      case "A - Z":
        sortedSubjects.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        break;
      case "Z - A":
        sortedSubjects.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
        break;
    }
    setFilteredSubjects(sortedSubjects);
    setSortType(type);
    setSortOptionsHidden(true);
  };

  // <ul className={sortOptionsHidden ? "sortOptions hidden" : "sortOptions"} --> sortOptionsHidden true ? then classname = "sortOptions hidden".
  //                                                                                                       Otherwise, just "sortOptions"
  // sortOptions is being used in the CSS file
  return (
    <>
      <a href='/newSubject'>
        <button className="create flex items-center justify-center mt-[75px] w-[750px] h-[80px] mx-[auto]">
          <div className="createButton min-h-[35px] min-w-[35px] flex content-center items-center ml-[28px]">
            <img src="/src/assets/addIcon.png" className="addIcon w-[35px] h-[auto]" alt="Add"/>
          </div>
          <h1 className="createText ml-[20px] text-[110%]"> Créer un nouveau sujet pour commencer à ajouter des cartes</h1>
        </button>
      </a>

      <div className="orDivider w-[100px] mx-[auto] mt-[35px] text-center">
        <p className="or italic text-[120%]"> Ou </p>
      </div>

      <div className="studyAddSearch flex items-center justify-around w-[100%] h-[100px] mt-[25px]">
        <button
          className="studyAdd flex items-center justify-center w-[30%] h-[45px] overflow-hidden ml-[16%] mr-[4%]">
          <div className="studyAddButton min-h-[35px] min-w-[35px] flex content-center items-center">
            <img src="/src/assets/DownArrow.png" className="studyAddIcon w-[35px] h-[auto]" alt={"Down"}/>
          </div>
          <h1 className="createText ml-[6%] text-[110%]"> Étudier ou compléter un sujet existant </h1>
        </button>

        <div className="search flex items-center justify-center w-[30%] mr-[16%] ml-[4%]">
          <input type="text"
                 placeholder="Rechercher tous les sujets..."
                 className={"subjectSearchBar w-[100%] h-[45px] bg-[rgb(18,_18,_18)] rounded-[16px] p-[22px] ml-[4%]"}
                 value={searchInput}
                 onChange={handleSearchInput}
                 id="searchBar"
          />
          <button
            className="subjectSearchButton min-h-[35px] min-w-[35px] flex content-center items-center ml-[7%] mr-[11%]">
            <img src="/src/assets/searchIcon.png" className="searchIcon w-[44px] h-[auto]" alt={"Search"}/>
          </button>
        </div>
      </div>

      <div className="subjectSection border-t-[black] border-t-[1px] border-t-[solid] mt-[65px] mb-[350px]">
        <div className="sort w-[30%] mx-[auto] mt-[30px] text-center flex text-[rgb(87,_88,_87)]">
          <div className="sortBy h-[30px] w-[25%] ml-[10%]">
            <p className="overflow-hidden h-[30px] leading-[30px]">
              Trier par:
            </p>
          </div>

          <div className="sortMenu w-[50%] relative bg-[rgb(255,_255,_255)]">
            <div className="menuSelected">
              <button
                className="sortSelected flex h-[30px] leading-[30px] text-[black] pt-[1px] w-[300px]"
                onClick={toggleSortOptions}
              >
                {sortType}
              </button>
            </div>

            <ul className={sortOptionsHidden ? "sortOptions hidden" : "sortOptions"}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '300px',
                  border: '1px solid grey',
                  borderRadius: '12px',
                  background: 'white',
                  padding: '2px 4px 16px'
                }}>
              <li onClick={() => sortSubjects("Les sujets les plus récents d'abord")}>
                <button>Les sujets les plus récents d'abord</button>
              </li>
              <li onClick={() => sortSubjects("Les sujets les plus anciens d'abord")}>
                <button>Les sujets les plus anciens d'abord</button>
              </li>
              <li onClick={() => sortSubjects("A - Z")}>
                <button>A - Z</button>
              </li>
              <li onClick={() => sortSubjects("Z - A")}>
                <button>Z - A</button>
              </li>
            </ul>
          </div>
        </div>

        <ul className="subject flex mx-[auto] w-[80%] flex-wrap pl-[3%] mt-[65px]">
          {filteredSubjects?.map((subject, index) => (
            <li key={index}>
              <a href={`/SubjectView/${subject.id}`}>
                <button>{subject.name}</button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}