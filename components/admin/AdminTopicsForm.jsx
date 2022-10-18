import React from 'react';
import AdminAuthorDescriptionAvatar from './AdminAuthorDescriptionAvatar';
import AdminDescriptionField from './AdminDescriptionField';
import AdminGoBack from './AdminGoBack';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import authService from '../../services/auth.service';
const { addTopic } = authService


const AdminForm = () => {
  const router = useRouter();
  const [topics, setTopics] = useState({title: '', page_description: '', page_url: '', source: '', quote_urls: []});

  function addANewQuote(event) {
    //prevent the page from reloading
    event.preventDefault();
    //add a new quote to the array
    setTopics({...topics, quote_urls: [...topics.quote_urls, ""]});
  }

  function removeQuote(event, index) {
    //prevent the page from reloading
    event.preventDefault();
    //remove the quote from the array
    const newQuotes = topics.quote_urls.filter((i, ind) => ind !== index);
    //update the state
    setTopics((prevState) => {
      return {...prevState, quote_urls: newQuotes}});
  }

  function handleSubmit (event) {
    //prevent the page from reloading
    event.preventDefault();
    //send the data to the server
    addTopic(topics)
      .then((response) => {
        //redirect to the admin page
        router.back();
      })
      .catch((error) => {
        //console.log(error);
      });
  }

  useEffect(() => {
    // //console.log("topics after the render is",topics);
  }, [topics]);

  return (
    <>
      <AdminGoBack />
    <div className="admin-form">
      <div className="admin-form-container">
        <form className="admin-form-box">
          <div className="admin-form-box-field admin-form-box-field--flex">
            <span className="admin-form-box-field-label">Topic Page URL</span>
            <input type="text" />
            <span className="admin-form-box-field-edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M0 11.8746V15H3.12543L12.3475 5.77789L9.22211 2.65245L0 11.8746ZM14.7562 3.36922C15.0813 3.04417 15.0813 2.51493 14.7562 2.18989L12.8101 0.243784C12.4851 -0.0812613 11.9558 -0.0812613 11.6308 0.243784L10.1056 1.769L13.231 4.89443L14.7562 3.36922Z"
                  fill="#BDBDBD"
                />
              </svg>
            </span>
          </div>
          <div className="admin-form-box-fields">
            <div className="admin-form-box-field ">
              <span className="admin-form-box-field-label">
                Topic Page Title
              </span>
              <input type="text" 
                value={topics.title}
                onChange={(e) => setTopics({...topics, title: e.target.value})}
              />
            </div>
            <div className="admin-form-box-field ">
              <span className="admin-form-box-field-label">Video URL</span>
              <input type="text" 
                value={topics.page_url}
                onChange={(e) => setTopics({...topics, page_url: e.target.value})}
              />
            </div>
          </div>
          <AdminDescriptionField state={topics} setState={setTopics}/>
          <p className="admin-form-box-selected">{topics.quote_urls.length} quotes selected</p>
          {topics.quote_urls.map((quote, index) => (
            <div key={index} className="admin-form-box-field ">
              <div className="admin-form-box-field-actions">
                <span className="admin-form-box-field-text">Quote {index}</span>
                <span className="admin-form-box-field-delete" 
                  onClick={(e) => removeQuote(e, index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                  >
                    <path
                      d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                </span>
              </div>
              <input type="text" value={topics.quote_urls[index]}
                onChange={(e) => {
                  const newQuoteUrls = [...topics.quote_urls];
                  newQuoteUrls[index] = e.target.value;
                  setTopics({...topics, quote_urls: newQuoteUrls});
                }}
              />
            </div>
          ))}

          <button  className="admin-form-box-btn" onClick={(event) => addANewQuote(event)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M1.772 9.828C1.484 9.828 1.232 9.732 1.016 9.54C0.824 9.324 0.728 9.06 0.728 8.748C0.728 8.46 0.824 8.22 1.016 8.028C1.232 7.836 1.484 7.74 1.772 7.74H16.64C16.928 7.74 17.168 7.848 17.36 8.064C17.576 8.256 17.684 8.508 17.684 8.82C17.684 9.084 17.576 9.324 17.36 9.54C17.168 9.732 16.928 9.828 16.64 9.828H1.772ZM9.188 17.604C8.852 17.604 8.576 17.496 8.36 17.28C8.144 17.064 8.036 16.788 8.036 16.452V1.188C8.036 0.851999 8.144 0.575999 8.36 0.36C8.6 0.144 8.876 0.0359995 9.188 0.0359995C9.548 0.0359995 9.824 0.144 10.016 0.36C10.232 0.575999 10.34 0.839999 10.34 1.152V16.416C10.34 16.776 10.232 17.064 10.016 17.28C9.8 17.496 9.524 17.604 9.188 17.604Z"
                fill="#ffffff"
              />
            </svg>
            Add new quote here
          </button>
          <button className="admin-form-box-btn" onClick={handleSubmit} style={{marginTop: '20px'}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M1.772 9.828C1.484 9.828 1.232 9.732 1.016 9.54C0.824 9.324 0.728 9.06 0.728 8.748C0.728 8.46 0.824 8.22 1.016 8.028C1.232 7.836 1.484 7.74 1.772 7.74H16.64C16.928 7.74 17.168 7.848 17.36 8.064C17.576 8.256 17.684 8.508 17.684 8.82C17.684 9.084 17.576 9.324 17.36 9.54C17.168 9.732 16.928 9.828 16.64 9.828H1.772ZM9.188 17.604C8.852 17.604 8.576 17.496 8.36 17.28C8.144 17.064 8.036 16.788 8.036 16.452V1.188C8.036 0.851999 8.144 0.575999 8.36 0.36C8.6 0.144 8.876 0.0359995 9.188 0.0359995C9.548 0.0359995 9.824 0.144 10.016 0.36C10.232 0.575999 10.34 0.839999 10.34 1.152V16.416C10.34 16.776 10.232 17.064 10.016 17.28C9.8 17.496 9.524 17.604 9.188 17.604Z"
                fill="#ffffff"
              />
            </svg>
            Submit
          </button>

        </form>
      </div>
    </div>
    </>
  );
};

export default AdminForm;
