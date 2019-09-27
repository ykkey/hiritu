import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import Wrap from '../components/Wrap';
import Block from '../components/Block';

const COLOR = {
  POINT: '#4682b4'
}


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x1: '',
      x2: '',
      y1: '',
      y2:'',
    };
    
  }
  
  changeValue(target,value) {
    this.state[target] = Number(value);
    this.setState({ [target] : Number(value)});
    this.Calculation(target);
  }
  Calculation(target) {
    if(!(Number(this.state.x2) == NaN || Number(this.state.y2) == NaN)) {
      let hiritu = this.state.x1 / this.state.y1;
      let newValue = target == "y2" ? this.state.x2 * hiritu : this.state.x2 / hiritu;
      target = target == "y2" ? "x2" : "y2" ;
      this.setState({[target]: newValue.toFixed(1)});
    }
  }

  render() {
    return (
      <Wrap>
        <Head>
          <title>比率計算</title>
        </Head>
        <Block>
          <h1>比率計算</h1>
          <p>画像の比率を変更する時などにお使いくださいませ</p>
          <dl>
            <dt>元サイズ</dt>
            <dd><input type="number" name="x1" onChange={(e) => this.changeValue('x1',e.target.value)} value={this.state.x1}/> × <input type="number" name="y1" onChange={(e) => this.changeValue('y1',e.target.value)} value={this.state.y1} /></dd>
            <dt>NEWサイズ(片方入力してください)</dt>
            <dd><input type="number" name="x2" onChange={(e) => this.changeValue('x2',e.target.value)} value={this.state.x2} /> × <input type="number" name="y2" onChange={(e) => this.changeValue('y2',e.target.value)} value={this.state.y2} /></dd>
          </dl>
        </Block>
      </Wrap>
    );
  }
}

export default IndexPage