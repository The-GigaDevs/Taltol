import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import authService from '../services/auth.service';

const { searchQuotesModal } = authService

const PickedSelect = ({picked, setPicked}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [optionsList, setOptionList] = useState([]);
  const dropdown = useSelector(state => state.admin.dropdown);
  let results = [];
  const dispatch = useDispatch();

  // useEffect(() => {
  //   async function dropDrownSearch(){
    
  //   switch (selectedOption) {
      
  //     case 0:
  //       results = await toast.promise(searchQuotesModal( "","", "","", true),
  //       {
  //         pending: "Loading... 0",
  //         success: "Success",
  //         error: "Error",
  //         }
  //         );
  //       results.count = 100;
  //         results = {...results, results: results.results.slice(0, 100)}

  //       dispatch({type: "quotes/addQuotes", payload: results})
  //       break;
  //     case 1:
  //       results = await toast.promise(searchQuotesModal( "","", "",   "elon musk"),
  //       {

  //         pending: "Loading...",
  //         success: "Success",
  //         error: "Error",
  //         }
  //         );
  //       results.count = 20;

  //     results = {...results, results: results.results.slice(0, 20)}
  //       dispatch({type: "quotes/addQuotes", payload: results})
  //       break;
  //     case 2:
  //       results = await toast.promise(searchQuotesModal( "","", "",   "Bill Gates"),
  //       {
  //         pending: "Loading...",
  //         success: "Success",
  //         error: "Error",
  //       }
  //       );
  //       // results = results.results.slice(0, 20);
  //       results.count = 20;
  //     results = {...results, results: results.results.slice(0, 20)}
  //       dispatch({type: "quotes/addQuotes", payload: results})

  //       break;
  //     case 3:
  //       results =await toast.promise(searchQuotesModal( "","", "",   "Steve Jobs"),
  //       {
  //         pending: "Loading...",
  //         success: "Success",
  //         error: "Error",

  //       });

  //       results = {...results, results: results.results.slice(0, 20)}
  //         // results = results.results.slice(0, 20);
  //         results.count = 20
  //         dispatch({type: "quotes/addQuotes", payload: results})

  //         break;

  //     default:
  //       setSelectedOption(0)
  //       break;
  //   }
    
  // }
  // //do not call the function if the component is rendered for the first time
  //   if(selectedOption !== null){
  //     dropDrownSearch();
  //   }
  
  // }, [selectedOption]);

  useEffect(()=> {
    if(dropdown.length !== 0) {
      setOptionList(Object.values(dropdown))
    } 
  }, [dropdown]);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (option, index) => {
    setPicked(option)
    setSelectedOption(index);
    setIsOptionsOpen(false);
    
  };


  const handleKeyDown = index => e => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = e => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedOption(
          selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1
        );
        break;
      case 'ArrowDown':
        e.preventDefault();
        setSelectedOption(
          selectedOption == optionsList.length - 1 ? 0 : selectedOption + 1
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="picked-select">
      <div className="picked-select-content">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className="picked-select-btn"
          onClick={toggleOptions}
          onKeyDown={handleListKeyDown}
        >
          { selectedOption ? optionsList[selectedOption] : optionsList[0] } Quotes
          <span
            className={
              isOptionsOpen
                ? 'picked-select-arrow expanded'
                : 'picked-select-arrow'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z"
                fill="#333333"
              ></path>
            </svg>
          </span>
        </button>

        <ul
          className={
            isOptionsOpen
              ? 'picked-select-options show'
              : 'picked-select-options'
          }
          role="listbox"
          aria-activedescendant={optionsList[selectedOption]}
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
        >
          {optionsList.map((option, index) => (
            <li
              key={option}
              id={option}
              role="option"
              aria-selected={selectedOption == index}
              tabIndex={0}
              onKeyDown={handleKeyDown(index)}
              onClick={() => {
                setSelectedThenCloseDropdown(option, index);
              }}
              className="picked-select-options-item"
            >
              {option} Quotes
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PickedSelect;
