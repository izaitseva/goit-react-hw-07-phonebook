import React from "react"
import { nanoid } from 'nanoid'

import { Phonebook } from "./Phonebook";

export class App extends React.Component {

  formSubmitHandler = data => {
    console.log(data);
  }

  render() {

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Phonebook onSubmit={this.formSubmitHandler}/>
      </div>
    );
  }
};
