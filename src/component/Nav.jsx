import React from 'react'

const Nav = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="AddEmployee.jsx">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Search.jsx">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Delete.jsx">Delete</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ViewAll
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="ViewAll.jsx">View</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav> 
    </div>
  )
}

export default Nav