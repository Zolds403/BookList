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
      this is a car
    </article>
  )
}


ReactDom.render(<BookList />,document.getElementById('root'));