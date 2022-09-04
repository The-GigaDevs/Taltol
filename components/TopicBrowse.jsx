const TopicBrowse = () => {
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
      <ul className="topic-browse-list">
        {Topics.map((topic, index) => (
          <li key={index} className="topic-browse-list-item">
            {topic.topicName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicBrowse;
