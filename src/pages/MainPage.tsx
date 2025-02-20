import React from 'react';

const sections = [
  { id: 'main', component: "" },
  { id: '', component: "" },
];

const MainPage = (): React.JSX.Element => {
  return (
    <>
      {sections.map(({ id, component }) => (
        <section id={id} key={id}>
          {component}
        </section>
      ))}
    </>
  );
};

export default MainPage;
