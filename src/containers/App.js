import './App.css';
import CardList from '../components/CardList';
import { archiveList } from '../archiveList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { Component } from 'react';


class App extends Component {
constructor(){
  super()
  this.state = {
    searchField: ''
  }
}

onSearchChange = (event) => {
  this.setState({searchField: event.target.value})
}




render(){
  const {searchField} = this.state;

  const filteredArchive = archiveList.filter(item => {
    const titleSearch = item.title.toLowerCase().includes(searchField.toLowerCase());
    const dateSearch = item.date.toLowerCase().includes(searchField.toLowerCase())

    return (titleSearch || dateSearch )
  });

  return (
    <div className = 'app-container'>
        <h1 className ='main-header'>UI-PRACTICE</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <Scroll>
          <CardList archive= {filteredArchive}/>
        </Scroll>
        
    </div>

  );


}
}

export default App;
