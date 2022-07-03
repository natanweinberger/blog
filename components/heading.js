const cssAttributes = 'font-bold mb-4 text-black';

export const H1 = ({ children }) => (
  <h1 className={`${cssAttributes} text-3xl md:text-5xl`}>
    {children}
  </h1>
);

export const H2 = ({ children }) => (
  <h2 className={`${cssAttributes} text-2xl md:text-4xl`}>
    {children}
  </h2>
);
