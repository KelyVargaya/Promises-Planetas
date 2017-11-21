import React, { Component } from 'react';
import logo from './logo.svg';
import {	BrowserRouter,Route,Switch,Redirect,Nav,NavLink} from 'react-router-dom';
import {Grid, Row, Col,Image,Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import {connect} from 'redux-zero/react';
import './App.css';
import planeta from './img/fondo1.jpg';
import {searchItem, search} from './actions';

const Item = ({item, index}) =>{ 
  return (
    <div className="cajita">
   	<Row key={index} className="items">
      <Col >
				<img src={item.pl_img} width="500px"/>
			</Col>
      	
			<Col >
				<h4>{item.pl_name}</h4>
			</Col>
      <Col >
				{item.dec} Lightyears aways
			</Col>
			<Col >
        Discovered in {item.pl_disc} with {item.pl_telescope}
			</Col>
		</Row>
    </div>
 );
}

const App = ({items, query}) => 
{
  let list = "";
  if(items.length == 0)
    search();
  else
  {
    list = items.map((item, index) =>
    {
      console.log("item", item);
      return <Item key={index} item = {item} index={index} />;
    })
  }
    return (
  <Grid className="App">
        <Row className="App-header">
          <h1 className="App-title">Exoplanet Explorer</h1>
          <h4>Learn more about planets around other starts!</h4>
        </Row>
          <Row>
          
          <h2>query: earth-like planets</h2>
        </Row>

        <Row>
          <ul>
            {list}
          </ul>
        </Row>
      </Grid>
    );
  
}

const mapToProps = ({items, query}) => ({items, query});
export default connect(mapToProps)(App);
