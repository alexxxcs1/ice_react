import React, { Component } from 'react'
import {Route,Switch  } from 'react-router-dom';
import style from './Home.scss'

import { Button } from '@alifd/next';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidMount()
  {
  }
  render() {
    return (
      <div className={style.Box}>
        <Button type="normal" size="large">Normal</Button> &nbsp;&nbsp;
        <Button type="primary">Prirmary</Button> &nbsp;&nbsp;
        <Button type="secondary">Secondary</Button>
        <br /><br />
        <Button type="normal" text>Normal</Button> &nbsp;&nbsp;
        <Button type="primary" text>Primary</Button> &nbsp;&nbsp;
        <Button type="secondary" text>Secondary</Button>
        <br /><br />
        <Button type="normal" warning>Normal</Button> &nbsp;&nbsp;
        <Button type="primary" warning>Primary</Button> &nbsp;&nbsp;
      </div>
    )
  }
}

export default Home
