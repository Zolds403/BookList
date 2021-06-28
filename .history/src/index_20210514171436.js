//jshint esversion: 7
// div / section / article or Fragment
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function BookList () {
  return (
    <section className='list'>
      <Book />
    </section>
  );
}



const Book = () => {
  const title = 'DBT For Dummies';
  const author = 'Gillian Galen';
  return(
    <article className='book'>
      <img src="https://images-na.ssl-images-amazon.com/images/I/61gSOK0S-iS._AC_UL200_SR200,200_.jpg" alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    
    </article>
  );
}



ReactDom.render(<BookList />,document.getElementById('root'));