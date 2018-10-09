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

 

  render() {

    const total = this.state.goods + this.state.neutrals + this.state.bads
    const average = parseFloat((this.state.goods + this.state.bads) / total).toFixed(1)
    const positives = parseFloat(this.state.goods / total).toFixed(1)+"%"

    return (
      <div>
        <div>
          <h1>anna palautetta</h1>
          <button onClick={() => this.setState({ goods: this.state.goods + 1 })}>
            hyvä
          </button>
          <button onClick={() => this.setState({ neutrals: this.state.neutrals + 1 })}>
            neutraali
          </button>
          <button onClick={() => this.setState({ bads: this.state.bads + 1 })}>
            huono
          </button>
          <h1>statistiikka</h1>
          <p>hyvä {this.state.goods}</p>
          <p>neutraali {this.state.neutrals}</p>
          <p>huono {this.state.bads}</p>
          <p>keskiarvo {average}</p>
          <p>positiivisia {positives}</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)