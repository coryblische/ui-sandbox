import React, { JSX } from 'react';

interface HeadingProps {
  size: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ size, children }) => {
  const Tag = `h${size}` as keyof JSX.IntrinsicElements & string;
  return React.createElement(Tag, {}, children);
};

export default Heading;