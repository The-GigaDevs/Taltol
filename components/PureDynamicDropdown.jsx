import { useEffect } from 'react';
import { useState } from 'react';

const PureDynamicDropdown = ({
  optionsList,
  setSelectedToState,
}) => {

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  useEffect(()=> {
    if(typeof optionsList === Array && optionsList?.length === 0) {
        setIsOptionsOpen(false);
    } else {
        setIsOptionsOpen(true);
    }
  }, [optionsList])
  

  return (
    <div className={isOptionsOpen ? 'sort-select open' : 'sort-select'}>
      <div className="sort-select-content">
        <ul
          className={
            isOptionsOpen ? 'sort-select-options show' : 'sort-select-options'
          }
          tabIndex={-1}
        >
          {optionsList?.map((option, index) => (
            <li
              id={option}
              role="option"
              aria-selected={index}
              tabIndex={0}
              key={option.id}
              onClick={() => {
                setSelectedToState(option);
                setIsOptionsOpen(false);
              }}
              className="sort-select-options-item"
            >
              {option.name || option.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PureDynamicDropdown;
