//jshint esversion: 7
// div / section / article or Fragment
import React from 'react';
import ReactDom from 'react-dom';


function BookList () {
  return (
    <section>
      <Book />
      
    </section>
  );
}

const Book = () => {
  return(
    <article>
      <Image/>
    </article>
  )
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/61gSOK0S-iS._AC_UL200_SR200,200_.jpg" alt=""/>

ReactDom.render(<BookList />,document.getElementById('root'));