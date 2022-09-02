import { useState } from 'react';

const PickedSelect = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const optionsList = [
    'Top 100 picked quotes this month',
    'Top 20 picked quotes for Elon Musk',
    'Top 20 picked quotes for Bill Gates',
    'Top 20 picked quotes for Steve Jobs',
  ];

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = index => {
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
          {optionsList[selectedOption]}
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
                setSelectedThenCloseDropdown(index);
              }}
              className="picked-select-options-item"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PickedSelect;
