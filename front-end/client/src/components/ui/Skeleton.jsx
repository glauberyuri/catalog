import React from 'react'

const Skeleton = ({ type }) => {
  if (type === "product") {
    return (
      <div className="flex w-auto p-2 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  if (type === "product-detail") {
    return (
      <div className="flex flex-col p-4 gap-6">
        <div className="skeleton h-56 w-full"></div>
        <div className="skeleton h-6 w-3/4"></div>
        <div className="skeleton h-4 w-1/2"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-10 w-32"></div>
      </div>
    );
  }

  return (
    <div className="flex w-auto p-2 flex-col gap-4">
      <div className="skeleton h-24 w-full"></div>
      <div className="skeleton h-4 w-32"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};

export default Skeleton;