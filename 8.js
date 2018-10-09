import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      goods: 0,
      neutrals: 0,
      bads: 0
    }
  }

  setGoods = (value) => {
    return () => {
      this.setState({ goods: value })
    }
  } 

  setNeutrals = (value) => {
    return () => {
      this.setState({ neutrals: value })
    }
  }

  setBads = (value) => {
    return () => {
      this.setState({ bads: value })
    }     
  }

  render() {

    const Statistic = (props) => {
      return (
          <p>{props.text} {props.value}</p>
      )
    }

    const Statistics = () => {
      return (
        <div>
          <Statistic text = "hyvä" value = {this.state.goods}/>
          <Statistic text = "neutraali" value = {this.state.neutrals}/>
          <Statistic text = "huono" value = {this.state.bads}/>
          <Statistic text = "keskiarvo" value = {average}/>
          <Statistic text = "positiivisia" value = {positives}/>
        </div>
      )
    }

    const Button = ({ handleClick, text }) => (
     
      <button onClick={handleClick}>
        {text}
      </button>
    )
   
    const total = this.state.goods + this.state.neutrals + this.state.bads
    const average = parseFloat((this.state.goods + this.state.bads) / total).toFixed(1)
    const positives = parseFloat(this.state.goods / total).toFixed(1)+"%"

    return (
      <div>
        <div>
          <h1>anna palautetta</h1>
          <Button
            handleClick={this.setGoods(this.state.goods + 1)}
            text="hyvä"
          />
          <Button
            handleClick={this.setNeutrals(this.state.neutrals + 1)}
            text="neutraali"
          />
          <Button
            handleClick={this.setBads(this.state.bads + 1)}
            text="huono"
          />
          <h1>statistiikka</h1>
          <Statistics/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)