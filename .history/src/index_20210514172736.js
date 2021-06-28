//jshint esversion: 7
// div / section / article or Fragment
import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css';
// setup vars
const firstBook = {
  img:'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth'
}
const title = 'DBT For Dummies';
const author = 'Gillian Galen';
const image = "https://images-na.ssl-images-amazon.com/images/I/61gSOK0S-iS._AC_UL200_SR200,200_.jpg";

function BookList () {
  return (
    <section className='list'>
      <Book job='developer' />
      <Book title='random title' number={22} />

    </section>
  );
}
const Book = (props) => {
  return(
    <article className='book'>
      <img src={image} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}



ReactDom.render(<BookList />,document.getElementById('root'));