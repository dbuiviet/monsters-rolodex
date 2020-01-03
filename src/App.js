import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.cpn';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            monsters: [],
            searchField: ''
        };
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }

    render() {
        //console.log(this.state.monsters.name);

        return (
            <div className="App">
                <input
                    type='search'
                    placeholder='Search monsters'
                    onChange={e => this.setState({searchField: e.target.value}, () => console.log(this.state))} />

                <CardList monsterList={this.state.monsters} />

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
