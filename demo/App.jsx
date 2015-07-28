
import React from 'react'
import spectralize from '..'
import Form from './Form'
import Input from './Input'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      h: 210,
      s: 85,
      l: 50,
      hues: 4,
      steps: 10,
      swing: -30,
      padL: 10
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: parseFloat(e.target.value) })
  }

  render() {
    let colors = spectralize(this.state)
    let styles = {
      root: {
        fontFamily: 'sans-serif',
        padding: 48,
        margin: 0
      }
    }

    return (
      <div style={styles.root}>
        <h1>spectralize</h1>
        <Form
          {...this.state}
          handleChange={this.handleChange} />
        <div>
          {colors.hues.map(function (steps, i) {
            return (
              <div key={i}
                style={{
                  display: 'table',
                  width: '100%',
                  tableLayout: 'fixed'
                }}>
                {steps.map(function (color, i) {
                  return (
                    <div key={i}
                      style={{
                        display: 'table-cell',
                        padding: 16
                      }}>
                      <div style={{
                        height: 64,
                        backgroundColor: color
                      }} />
                  </div>
                  )
                })}
              </div>
            )
          })}
        </div>
        <pre>{JSON.stringify(this.state, null, '  ')}</pre>
        <pre>{JSON.stringify(colors, null, '  ')}</pre>
      </div>
    )
  }

}

export default App

