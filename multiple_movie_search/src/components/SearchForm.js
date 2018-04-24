import React , {Component} from 'react'

class SearchForm extends Component{
	render(){
		return (
			<div>
			<form onSubmit={this.props.submit.bind(this)}>
				<input 
					placeholder="seach greatness"
					type="search"
					name="search"
					value={this.props.value}
					onChange={e =>{this.props.searchChange(e)}}/>
				<label>
					TYPE
					<select
						value={this.props.option}
						type="text"
						name="option"
						onChange={e =>{this.props.searchChange(e)}}> 
						<option value="movie">movie</option>
						<option value="series">series</option>
					</select>
				</label>
				<button type="submit" value="Submit" >submit</button>
			</form>
			</div>
			)
	}
}


export default SearchForm