import React, { Component } from 'react'
import Item from './Item'


class Display extends Component {
	renderData(e){
			return e.map((el, index) =>{
			return(
				<div 
				key={index}>
				<Item data={el}/> 
				</div>
				)
		})
	}
    render() {
        return ( 
        	<div className="container movies">{this.renderData(this.props.data)} </div>)
        }
    }


   export default Display