import logo from './logo.svg';
import './App.css';

// function App() {
//   const arr = [1, 2, 3];

//   return <div className='pp'>
//     <p>{arr[0]}</p>
//     <p>{arr[1]}</p>
//     <p>{arr[2]}</p>
//   </div>;
// }



// function App() {
//   const obj = { a: 1, b: 2, c: 3 };

//   return <div className='pp'>
//     <p>{obj.a}</p>
//     <p>{obj.b}</p>
//     <p>{obj.c}</p>
//   </div>;
// }

// import Nav from './Nav.js'
// function App() {
//   return (
//      <Nav />
//     // <Nav nav={nav} />
//   );
// }


import React, { Component} from 'react';

// const list = [
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
    
//   },
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
    

//   },
// ];
// function App() {
//   return (
//     <div className='App'>
//       {list.map(function (item) {

//         return (
//           <div>
//             <span>
//               <a href={item.url}>{item.title}</a>
//                            _ </span>
//             <span>{item.author} _ </span>
//             <span>{item.num_comments}</span>
//             <span>{item.points}</span>
          
//           </div>
//         );
//       })}
      
//     </div>
//   );
// }



// Самостоятельная работа
import manvel from './manvel.jpg';
import miyagi from './Безымянный.png';
import puska from './scale_1200.webp';

 
const turtles = [
  {
    id :1,
    name: 'Kroyan Manvel',
    nickname: 'Al1gator774',
    weapon: 'AK-47',
    imgUrl: manvel,
  },
  {
    id :2,
    name: 'Азамат & Сослан',
    nickname: 'Miyagi & Andy',
    weapon: 'Микрофон',
    imgUrl: miyagi,
  },
  {
    id :3,
    name: 'Pushkin Aleksandr',
    nickname: 'Pushok',
    weapon: 'Ручка',
    imgUrl: puska,
  },
];


  function App() {
    return (
      <div className='App'>
        {turtles.map(function (asa) {

          return (
            <div className='kart'>
              <h3 key={asa.id}>{asa.name}</h3>
              <small><b>{asa.nickname}</b></small>
              <p>{asa.weapon}</p>
              <img src={asa.imgUrl}></img>

            </div>
          );
        })}

      </div>
    );
  }


export default App;
