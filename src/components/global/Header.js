import React from 'react';
import { Link } from 'react-router-dom';
export const Header = () => {
    return(
        <>
      

                <nav class="navbar navbar-expand-lg bg-transparent">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="images/logo-light.svg"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">ABOUT Us</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SERVICES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">PORTFOLIO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">BLOG</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}