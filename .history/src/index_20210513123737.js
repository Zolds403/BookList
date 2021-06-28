//jshint esversion: 7
// div / section / article or Fragment
import React from 'react';
import ReactDom from 'react-dom';


function BookList () {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return(
    <article>
      <Image/>
      <Title />
      <Author />
    </article>
  );
}

const Title = () => <h1>DBT For Dummies</h1>
const Author = () => <h4>Gillian Galen</h4>

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/61gSOK0S-iS._AC_UL200_SR200,200_.jpg" alt=""/>

ReactDom.render(<BookList />,document.getElementById('root'));