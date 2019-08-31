import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import SearchBar from './Components/SearchBar';
import './Main.css';
import SubordinateList from './Components/SubordinateList';

function Main() {
  const [items, onSearchClick] = useState([]);

  return (
    <div className="Main">
      <header className="Main-header">
        <h1>Employee Explorer</h1>
      </header>
      <section className="center-block p-5">
        <div className="col-lg-6 col-md-9 col-sm-10 col-xs-12 border border-secondary p-5">
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Employee Name</InputGroup.Text>
            </InputGroup.Prepend>
            <SearchBar onSearchClick={onSearchClick} />
          </InputGroup>
          <SubordinateList items={items} />
        </div>
      </section>

    </div>
  );
}

export default Main;
