//jshint esversion: 7
// div / section / article or Fragment
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const Title = () => <h1>DBT For Dummies</h1>;

const Author = () => (
  <h4 style={{color: '#617d98',fontSize: '0.75rem',marginTop: '0.25rem' }}>
    Gillian Galen
  </h4>
);

const Image = () => (
<img src="https://images-na.ssl-images-amazon.com/images/I/61gSOK0S-iS._AC_UL200_SR200,200_.jpg" alt=""/>
);

function BookList () {
  return (
    <section className='list'>
      <Book />
    </section>
  );
}

const Book = () => {
  return(
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
}



ReactDom.render(<BookList />,document.getElementById('root'));