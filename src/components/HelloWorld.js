import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        const { greeting } = this.props;
        return (
            <div>
                <h1>{greeting}</h1>
                <p>My name is ... test</p>
            </div>
        );
    }
  }
  
  export default HelloWorld;