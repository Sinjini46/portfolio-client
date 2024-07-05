import React from 'react';

function Loader() {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary'>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-5 text-base sm:text-4xl font-semibold">
        <h1 className="text-secondary sinjini">Sinjini</h1>
        <h1 className="text-tertiary hom">Hom</h1>
        <h1 className="text-secondary roy">Roy</h1>
      </div>
    </div>
  );
}

export default Loader;
