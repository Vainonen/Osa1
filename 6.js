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
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)