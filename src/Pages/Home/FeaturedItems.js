import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';

const FeaturedItems = () => {
  const {
    isLoading,
    error,
    data: items,
  } = useQuery('featuredItems', () =>
    fetch(`items.json`).then((res) => res.json())
  );
  console.log(items);

  if (isLoading) return 'Loading...';

  if (error) {
    return 'An error has occurred: ' + error.message;
  }

  return (
    <section className="bg-secondary font-semibold">
      <div className="text-center text-neutral py-12">
        <h4>ONLINE STORE</h4>
        <h2 className="text-3xl font-bold">
          Our products <br /> are fresh organic
        </h2>
      </div>

      {/* Products By Tav */}
      <div className="tabs justify-center my-4">
        <Link to={'/'} className="tab tab-bordered">
          Tab 1
        </Link>
        <Link to={'/'} className="tab tab-bordered tab-active">
          Tab 2
        </Link>
        <Link to={'/'} className="tab tab-bordered">
          Tab 3
        </Link>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-4 mx-4">
        {items?.map((item) => (
          <ItemCard item={item}></ItemCard>
        ))}
      </section>
    </section>
  );
};

export default FeaturedItems;
