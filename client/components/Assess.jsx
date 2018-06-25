import React from 'react'

class Assess extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: 'leadership'}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    alert('As an ally, ' + this.state.value + 'is most important to you')
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
              As an ally, what would be most useful for you to enhance your allyship skills?
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="leadership">Inclusive Leadership</option>
            <option value="safespace">Guidance on creating a safe space for open discussion</option>
            <option value="ubiases">Unconscious biases workshop/assessment</option>
            <option value="intervention">Guidance on direct intervention for intolerance</option>
            <option value="storytelling">Links to diverse voices e.g. social media, film</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

//     ReactDOM.render(
//       <Assess />,
//       document.getElementById('root')
//     )
//     <h2>Assess</h2>

//   )
// }

export default Assess
