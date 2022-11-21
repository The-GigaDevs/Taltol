import { useEffect } from 'react';
import { useState } from 'react';

const DynamicDropdown = ({
  optionsList,
  addQuote,
  setAddQuote,
  state,
  quote,
  setQuote,
}) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  useEffect(()=> {
    if (quote?.author ==='' && addQuote.author) {
      setIsOptionsOpen(true);
    } else if(quote?.author && addQuote.author) {
      setIsOptionsOpen(false);
    }  
  }, [quote.author, addQuote.author])
  useEffect(() => {
    if (quote?.topic ==='' && addQuote.topic) {
      setIsOptionsOpen(true);
    } else if(quote?.topic && addQuote.topic) {
      setIsOptionsOpen(false);
    }
   
  }, [quote.topic, addQuote.topic]);

  const setSelectedThenCloseDropdown = (option, index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
    console.log(isOptionsOpen, 'isOptionsOpen');
    if (state === 'authors') {
      setAddQuote({ ...addQuote, author: option?.name?.replace(/,\s*$/, '') });
      setQuote({ ...quote, author: option?.name?.replace(/,\s*$/, '') });
    } else {
      setAddQuote({ ...addQuote, topic: option?.name?.replace(/,\s*$/, '') });
      setQuote({ ...quote, topic: option?.name?.replace(/,\s*$/, '') });
    }
    // setDefaultOption(false);
  };

  const handleKeyDown = index => e => {};

  const handleListKeyDown = e => {};

  console.log(isOptionsOpen);

  return (
    <div className={isOptionsOpen ? 'sort-select open' : 'sort-select'}>
      <div className="sort-select-content">
        {/* <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className="sort-select-btn"
          onClick={toggleOptions}
          onKeyDown={handleListKeyDown}
        >
          {defaultOption ? 'Sort By' : optionsList[selectedOption]}
          <span
            className={
              isOptionsOpen ? 'sort-select-arrow expanded' : 'sort-select-arrow'
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
        </button> */}

        <ul
          className={
            isOptionsOpen ? 'sort-select-options show' : 'sort-select-options'
          }
          role="listbox"
          aria-activedescendant={
            optionsList?.length ? optionsList[selectedOption] : ''
          }
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
        >
          {optionsList?.map((option, index) => (
            <li
              id={option}
              role="option"
              aria-selected={selectedOption == index}
              tabIndex={0}
              key={option.id}
              onKeyDown={handleKeyDown(index)}
              onClick={() => {
                setSelectedThenCloseDropdown(option, index);
                setIsOptionsOpen(false);
              }}
              className="sort-select-options-item"
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DynamicDropdown;
