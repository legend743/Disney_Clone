import React from 'react';
import { Link } from 'react-router-dom';

function HeaderItem({ name, Icon, link }) {
  return (
    <Link to={link} className="flex items-center gap-3 cursor-pointer text-[14px] font-semibold mt-3">
      <div className="flex items-center gap-2">
        <Icon />
        <h2>{name}</h2>
      </div>
    </Link>
  );
}

export default HeaderItem;
