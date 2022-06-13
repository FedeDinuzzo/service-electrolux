import React from 'react';
import './main.css';

function NavBar() {
  return (
    <>
    <nav class='desktop'>
      <div class="navBarContainer">
        <h3 class="logo">Ahmed</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
      </div>
    </nav>

    <nav class="mobile">
      <ul>
        <li><a href="#"><i class="fas fa-home"></i> <span>Home</span></a></li>
        <li><a href="#"><i class="fas fa-address-card"></i> <span>About</span></a></li>
        <li><a href="#"><i class="fas fa-award"></i> <span>Projects</span></a></li>
        <li><a href="#"><i class="fas fa-phone-alt"></i><span>Contact</span></a> </li>
      </ul>
    </nav>
    </>
  )
}

export default NavBar