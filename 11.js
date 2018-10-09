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

  setGoods = (value) => () => this.setState({ goods: value })

  setNeutrals = (value) => () => this.setState({ neutrals: value })

  setBads = (value) =>() => this.setState({ bads: value })

  render() {

    const Statistic = (props) => {
        return (
            <tr>
              <td>{props.text}</td>
              <td>{props.value}</td>
            </tr>
        )
    }

    const Statistics = () => {
      if (total !== 0) {
        return (  
          <table>
            <tbody>
              <Statistic text = "hyvä" value = {this.state.goods}/>         
              <Statistic text = "neutraali" value = {this.state.neutrals}/>
              <Statistic text = "huono" value = {this.state.bads}/>
              <Statistic text = "keskiarvo" value = {average}/>
              <Statistic text = "positiivisia" value = {positives}/>
            </tbody>
          </table>
        )
      }
      else return (
        <p>ei yhtään palautetta annettu</p>
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