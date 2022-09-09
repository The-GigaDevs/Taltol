import { useEffect, useState } from "react";
import authService from "../services/auth.service";

const TopicBrowse = () => {

  const [ loading, setLoading ] = useState(true);
  const [caterories, setCategories] = useState([]);



  useEffect(() => {
    const fetchCategories = async () => {
      authService.getCategories().then(
        (response) => {
          console.log(response);
          setCategories(response.results);
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
    };
    fetchCategories();
  }, []);

  function getCategoryQuotes () {

    debugger
    authService.getQuotesByCategory(this.id, 1, 10).then(
      (response) => {
        console.log(response);
      }
    );
  }


  
    const Topics = [
    {
      topicName: 'Humor Quotes ',
    },
    {
      topicName: 'Life Lessons Quotes  ',
    },
    {
      topicName: 'Motivational Quotes  ',
    },
    {
      topicName: 'Humor Quotes ',
    },
    {
      topicName: 'Life Lessons Quotes  ',
    },
    {
      topicName: 'Motivational Quotes  ',
    },
    {
      topicName: 'Humor Quotes ',
    },
    {
      topicName: 'Life Lessons Quotes  ',
    },
    {
      topicName: 'Motivational Quotes  ',
    },
    {
      topicName: 'Humor Quotes ',
    },
    {
      topicName: 'Life Lessons Quotes  ',
    },
    {
      topicName: 'Motivational Quotes  ',
    },
    {
      topicName: 'Humor Quotes ',
    },
    {
      topicName: 'Life Lessons Quotes  ',
    },
    {
      topicName: 'Motivational Quotes  ',
    },
    {
      topicName: 'Humor Quotes ',
    },
    {
      topicName: 'Life Lessons Quotes  ',
    },
    {
      topicName: 'Motivational Quotes  ',
    },
    {
      topicName: 'Motivational Quotes  ',
    },
    {
      topicName: 'Humor Quotes ',
    },
    {
      topicName: 'Life Lessons Quotes  ',
    },
    {
      topicName: 'Motivational Quotes  ',
    },
    {
      topicName: 'Humor Quotes ',
    },
    {
      topicName: 'Life Lessons Quotes  ',
    },
    {
      topicName: 'Motivational Quotes  ',
    },
  ];

  return (
    <div className="topic-browse">
      <h3 className="topic-browse-title">Browse by topic</h3>
      <ul className="topic-browse-list" >
        {caterories.map((category, index) => (
          <li key={index} onClick={getCategoryQuotes.bind(category)} className="topic-browse-list-item">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicBrowse;
