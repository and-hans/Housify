import React from "react";

function CollapsibleExample() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <a className="nav-link" href="/#">Home <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/#">Financial</a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Lifestyle
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/#">Action</a>
            <a className="dropdown-item" href="/#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/#">Something else here</a>
            </div>
        </li>
        </ul>
    </div>
    </nav>
  );
}

export default CollapsibleExample;