import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: []
    }
  }
 
  vote = (value) => {
    console.log(kopio)
    return () => {
      kopio[value] = kopio[value] + 1
      this.setState({ selected: value})

    }
  }

  randomizeAnecdote = () => {
    const number = Math.floor(Math.random() * anecdotes.length)
    return () => {
      this.setState({ selected: number})
    } 
  }

  render() {
   

    const Button = ({ handleClick, text }) => (
      <button onClick={handleClick}>
        {text}
      </button>
    )

    return (
     
      <div>
        <p>
          {this.props.anecdotes[this.state.selected]}
        </p>
        <p>
          has {this.props.kopio[this.state.selected]} votes
        </p>
        <p> 
        <Button
          handleClick={this.vote(this.state.selected)} 
          text="vote"
        /> 
        <Button
          handleClick={this.randomizeAnecdote()}
          text="next anecdote"
        />
        </p>
      </div>
    )
  }
}
 
const pisteet =  [0, 0, 0, 0, 0, 0]
const kopio = [...pisteet]

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} kopio = {kopio} />,
  document.getElementById('root')
)