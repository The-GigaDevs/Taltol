import QuoteCards from './QuoteCards';
import SortSelect from './SortSelect';

const CategoryResults = () => {
  return (
    <div className="category-results">
      <div className="category-results-content">
        <p className="category-results-text">857 results</p>
        <SortSelect />
      </div>
      <QuoteCards />
    </div>
  );
};

export default CategoryResults;
