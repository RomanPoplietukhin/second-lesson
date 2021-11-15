import React from 'react';
import './App.css';
import  news from'./news.json';

function App() {
  // let keyGen = 0.1 + Math.random();
  return (
      <div id="outer-container" >
        {news.map(el => (
          <div className="container" key={ el.id}>
            <h2 className="title"> { el.title } </h2>
            <p className="date"> { el.dateCreated } </p>
            <div dangerouslySetInnerHTML={{__html: el.content }}></div>
            {null || <img src={ el.photo } alt={ ' ' } /> }
            {el.isSpecial && ( <h3 style={{ color: 'red' }}>Special card</h3> )}
            <div className="cathegoriess">
              <h3 className="cathegories-title">Cathegories</h3>
              <ul className="cathegories-list">
                {el.categories.map(item => (
                  <li className="list-item" key={item.id}> { item.name } </li>
                ))}
              </ul>
            </div>
            { null || <a href={ el.link }>Gulgul</a> }
            <h5 className="author">{ el.author }</h5>
          </div>
        ))}
      </div>
  )
}

export default App;
