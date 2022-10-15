import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const AdminRoleSelect = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();


  const optionsList = [
    'Quotes',
    'Authors',
    'Topics',
    'Tags',
    'Customized pages',
    'Users',
    'Advertisements',
    'Suggestions',
    'General Settings',
  ];
  useEffect(() => {
    console.log('Rendering AdminRoleSelect');

    //extract the role from the router.asPath separated by - and use second part as selectedOption
    const role = router.asPath.split('-')[1];
    if (role !== 'customized') {
      const index = optionsList.findIndex(option => option.toLowerCase() === role);      
      setSelectedOption(index);
    }
    if(role === 'customized'){
      setSelectedOption(4);
    }
    
  }, []);



  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = index => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
    switch (index) {
      case 0:
        router.push('/admin/admin-quotes');
        break;
      case 1:
        router.push('/admin/admin-authors');
        break;
      case 2:
        router.push('/admin/admin-topics');
        break;
      case 3:
        router.push('/admin/admin-tags');
        break;
      case 4:
        router.push('/admin/admin-customized');
        break;
      // case 5:
      //   router.push('/admin/users');
      //   break;
      // case 6:
      //   router.push('/admin/advertisements');
      //   break;
      // case 7:
      //   router.push('/admin/suggestions');
      //   break;
      // case 8:
      //   router.push('/admin/settings');
      //   break;
      default:
        break;

  }
}

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
        setSelectedThenCloseDropdown(
          selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1
        );
        break;
      case 'ArrowDown':
        e.preventDefault();
        setSelectedThenCloseDropdown(
          selectedOption == optionsList.length - 1 ? 0 : selectedOption + 1
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="admin-role-select">
      <div className="admin-role-select-content">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOptionsOpen}
          className="admin-role-select-btn"
          onClick={toggleOptions}
          onKeyDown={handleListKeyDown}
        >
          {optionsList[selectedOption]}
          <span
            className={
              isOptionsOpen
                ? 'admin-role-select-arrow expanded'
                : 'admin-role-select-arrow'
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
                fill="#bdbdbd"
              ></path>
            </svg>
          </span>
        </button>

        <ul
          className={
            isOptionsOpen
              ? 'admin-role-select-options show'
              : 'admin-role-select-options'
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
              value={selectedOption}
              onKeyDown={handleKeyDown(index)}
              onClick={() => {
                setSelectedThenCloseDropdown(index);
              }}
              className="admin-role-select-options-item"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default AdminRoleSelect;
