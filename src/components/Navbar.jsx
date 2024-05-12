
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <div className="navbar-wrapper">
//       <div className="navbar-left">
//         <div className="navbar-name">Logo</div>
//         <span>toggle</span>
//       </div>
//       <div className="navbar-right">
//         <div className="navbar-list">
//           <ul>
//             <li>Home</li>
//             <li>Services</li>
//             <li>Experience</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );

// }


// export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-900 text-white p-4">
      <div className="flex items-center">
        <div className="mr-4">Logo</div>
        <span>toggle</span>
      </div>
      <div className="hidden md:block">
        <ul className="flex">
          <li className="mr-4"><Link to="/about">about</Link></li>
          <li className="mr-4"><Link to="/projects">projects</Link></li>
          <li className="mr-4"><Link to="technologies">technologies</Link></li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default Navbar;

