import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.cpn';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            monsters: []
        };
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }

    render() {
        return (
            <div className="App">
                <CardList name='monsters'>
                {
                    this.state.monsters.map(monster =>
                        (<h1 key={monster.id}> { monster.name } </h1>)
                    )
                }
                </CardList>


                {/*<header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        <h1>{ this.state.welcome_string }</h1><br/>

                        <button onClick={() => this.setState({welcome_string: 'Hello, dbuiviet! Welcome to React!'})}>
                            Change text
                        </button>

                        <br/>Edit <code>src/App.js</code> and save to reload.
                    </p>

                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>*/}
            </div>
        )
    };
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Hello, dbuiviet</h1><br/>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
