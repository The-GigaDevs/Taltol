import QuoteStatic from './QuoteStatic';

const UserLikedQuotes = (
  { activeTab } //get the active tab from userheader
) => {
  return (
    <>
      <section
        className={
          activeTab === 'tab1'
            ? 'user-liked-quotes show'
            : 'user-liked-quotes hide'
        }
      >
        <p className="user-liked-quotes-count">726 liked quotes</p>
        <div className="user-liked-quotes-content">
          <QuoteStatic />
          <QuoteStatic />
          <QuoteStatic />
          <QuoteStatic />
          <QuoteStatic />
          <QuoteStatic />
        </div>
      </section>
    </>
  );
};

export default UserLikedQuotes;
