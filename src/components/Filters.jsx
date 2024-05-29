import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const Filters = () => {
  const { changeGenderFilter } = useContext(ProductContext);

  const genderFilter = [
    { id: 'male', cateogry: "men's clothing", title: "Men's" },
    { id: 'female', cateogry: "women's clothing", title: "Women's" },
  ];

  return (
    <section className="mt-4 py-4 border-[#e4e4e4] border border-x-0">
      <div className="flex justify-center gap-2">
        {genderFilter.map(({ cateogry, id, title }) => (
          <button
            className="px-4 py-5 border border-[#e4e4e4] rounded-sm hover:bg-slate-100 transition-all active:scale-95"
            key={id}
            onClick={() => changeGenderFilter(cateogry)}
          >
            {title}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Filters;
