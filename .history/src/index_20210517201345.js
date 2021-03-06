//jshint esversion: 7
// div / section / article or Fragment
import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css';
// setup vars
const books = [
  {
    img:'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth'
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/61gSOK0S-iS._AC_UL200_SR200,200_.jpg",
    title: 'DBT For Dummies',
    author: 'Gillian Galen',
  },
];

const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames);

function BookList () {
  return (
    <section className='list'>
      {names}
    </section>
  );
}
const Book = ({img, title, author, children}) => {
  return(
    <article className='book'>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
      
    </article>
  );
}



ReactDom.render(<BookList />,document.getElementById('root'));