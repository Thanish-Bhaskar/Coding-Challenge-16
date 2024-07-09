
import React from 'react';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

const SubHeader = ({ subtitle }) => {
  return (
    <header>
      <h2>{subtitle}</h2>
    </header>
  );
};

export { Header, SubHeader };
