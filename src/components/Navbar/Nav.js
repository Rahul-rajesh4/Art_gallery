import React from 'react'
import './nav.css'
export default function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg fixed-top">
        <div class="container-fluid">
          <label class="brand text-black">Art<br></br>Gallery</label>
          <button class="navbar-toggler bg2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-black" aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-black" href="/add">Add Items</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-black" href='/'>login</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </div>
  )
}
