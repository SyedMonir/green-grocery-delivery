import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedItems = () => {
  return (
    <section className="bg-secondary font-semibold">
      <div className="text-center text-neutral py-12">
        <h4>ONLINE STORE</h4>
        <h2 className="text-3xl font-bold">
          Our products <br /> are fresh organic
        </h2>
      </div>

      {/* Products By Tav */}
      <div class="tabs">
        <Link to={'/'} class="tab tab-bordered">
          Tab 1
        </Link>
        <Link to={'/'} class="tab tab-bordered tab-active">
          Tab 2
        </Link>
        <Link to={'/'} class="tab tab-bordered">
          Tab 3
        </Link>
      </div>
    </section>
  );
};

export default FeaturedItems;
