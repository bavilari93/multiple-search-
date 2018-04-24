import React , {Component} from 'react'; 

class Item extends Component{
	render(){
	return(
		<div className="movie-item">
		<img src={this.props.data.Poster} alt=""/>
		<h1>{this.props.data.Title}</h1>
		</div>)
	}
}


export default Item;