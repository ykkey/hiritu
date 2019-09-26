import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0,
    };
    
    const backgroundColor = ({ primary, secondary, background }) =>
      primary ? "#3F51B5" : secondary ? "#E91E63" : background;

    const Input = styled.input`
      min-width: 64px;
      line-height: 32px;
      border-radius: 4px;
      border: none;
      outline: none;
      padding: 0 16px;
      color: #fff;
      cursor: pointer;
      background: ${backgroundColor};
      &:foucus {
        background: ${props => chroma(backgroundColor(props)).darken()};
      }
    `;
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
    const COLOR = {
      POINT: '#4682b4'
    }
    const H1 = styled.h1`
      font-size: 25px;
      color: ${COLOR.POINT}
    `;
    const Guide = styled.p`
      font-size:15px;
      margin-bottom: 20px;
    `;
    const DtTitle = styled.dt`
    font-weight: bold;
      color : ${COLOR.POINT}
    `;
    const Input = styled.input`
      border: 1px solid #ccc;
      padding: 5px;
      outline: none;
      margin-top: 5px;
    `;
    const Wrap = styled.div`
      background-color:  ${COLOR.POINT};
      position: relative;
      height: 100%;
      height: 100vh;
    `;
    const Black = styled.div`
      background-color: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      padding: 50px;
      max-width: 90%;
      @media screen and (max-width: 1024px) {
        padding: 20px;
        width: 70%;
      }

    `
    const DdText = styled.dd`
      margin-bottom: 30px;
      margin-left: 0;
    `;

    return (
      <Wrap>
        <Head>
          <title>比率計算</title>
        </Head>
        <Black>
          <H1>比率計算</H1>
          <Guide>画像の比率を変更する時などにお使いくださいませ</Guide>
          <dl>
            <DtTitle>元サイズ</DtTitle>
            <DdText><Input type="number" name="x1" onChange={(e) => this.changeValue('x1',e.target.value)}/> × <Input type="number" name="y1" onChange={(e) => this.changeValue('y1',e.target.value)} /></DdText>
            <DtTitle>NEWサイズ(片方入力してください)</DtTitle>
            <DdText><Input type="number" name="x2" onChange={(e) => this.changeValue('x2',e.target.value)} value={this.state.x2} /> × <Input type="number" name="y2" onChange={(e) => this.changeValue('y2',e.target.value)} value={this.state.y2} /></DdText>
          </dl>
        </Black>
      </Wrap>
    );
  }
}

export default IndexPage