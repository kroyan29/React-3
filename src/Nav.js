
import './App.css';

// function Nav() {
//     let nav = [1, 2, 3]
//     return (
//         <nav className='pp'>
//             <h1>{nav.map(elem => { return <li>{elem}</li> })}</h1>
//         </nav>
//     );
// }



// function Nav() {
//     let nav = {
//         "main":"/index",
//         "about":"/aqbout",
//         "price":"/buy/price",
//     }
//     return (
//         <nav className='pp'>
//             <ul>
//                 <h1>{Object.keys(nav).map(elem => { return <li>{elem}</li> })}</h1>
//             </ul>
//         </nav>
//     );
// }


// function Nav() {
//     let nav = {
//         "main": "/index",
//         "about": "/aqbout",
//         "price": "/buy/price",
//     }
//     return (
//         <nav className='pp'>
//             <ul>
//                 <h1>{Object.keys(nav).map(elem => { return <li><a href='{nav[elem]}'>{elem}</a></li>; })}</h1>
//             </ul>
//         </nav>
//     );
// }


// function Nav() {
//     let nav = {
//         "main": "/index",
//         "about": "/aqbout",
//         "price": "/buy/price",
//     }
//     return (
//         <nav className='pp'>
//             <ul>
//                 <h1>{Object.keys(nav).map(elem => { return <li>{elem}{nav[elem]}</li>; })}</h1>
//             </ul>
//         </nav>
//     );
// }


function Nav(props) {
    // let nav = {
    //     "main": "/index",
    //     "about": "/aqbout",
    //     "price": "/buy/price",
    // }
    let nav = props.nav;
    return (
        <nav className='pp'>
            <ul>
                <h1>{Object.keys(nav).map(elem => { return <li><a href='{nav[elem]}'>{elem}</a></li>; })}
                </h1>
            </ul>
        </nav>
    );
}
    export default Nav;