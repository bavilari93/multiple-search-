import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm'
import Display from './components/Display'

class App extends Component {
  constructor(){
    super();
    this.state = {
      search:'',
      option:'movie',
      mode:'', 
      data:[], 
      mode:''
    }
  }


searchChange(search){
  const target = search.target;
  const value =target.value;
  const name = target.name
  this.setState({
    [name]:value
  }) 
}
handleSubmit(event){
 event.preventDefault();
 this.getMovie();
}

  getMovie(){
    let searchParams = this.state.search
    let typeParams = this.state.option
    fetch(`http://www.omdbapi.com/?s=${searchParams}&type=${typeParams}&apikey=c20509f`,{
    method: 'GET'
    }).then(response =>
      response.json()
    ).then((data) =>{
    this.setState({
      data:data.Search
    })
    })
}



  render() {
    return (
      <div className="App">
        <h1>    MOVIE SEARCH</h1>
        <SearchForm
          value={this.state.search}
          option={this.state.option}
          searchChange={this.searchChange.bind(this)}
          submit={this.handleSubmit.bind(this)}/>
        <Display
        data={this.state.data}
            />
          
      </div>
    );
  }
}

export default App;
