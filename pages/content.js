import React from "react";
import PickedSelect from '../components/PickedSelect';
import QuoteCards from '../components/QuoteCards';
import TopicBrowse from '../components/TopicBrowse';

export default function Content() {
  return (
    <div className="container">
      <div className="home-main-content">
        <section className="home-main-left-content">
          <PickedSelect />
          <QuoteCards />
        </section>
        <section className="home-main-right-content">
          <TopicBrowse />
        </section>
      </div>
    </div>
  );
}
