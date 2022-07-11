import './App.css';
import SearchBar from './components/search-bar/search-bar.component';
import CardList from './components/card-list/card-list.component';
import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchWord: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      this.setState({monsters: users})
    })
  }

  
  render() {
    const { monsters, searchWord } = this.state
     const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchWord);
    })

    const onChangeHandler = (event) => {
      this.setState(() => {
        return({
          searchWord: event.target.value.toLocaleLowerCase()
        })
      }) 
    }


    return (
      <div className="App">
       <h2 className='app-title'>Monsters Rolodex (Class Version)</h2>
        <SearchBar onChange={onChangeHandler} className='search-bar'/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
  
}

export default App;
