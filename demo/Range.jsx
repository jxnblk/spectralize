
import React from 'react'

class Range extends React.Component {

  render() {
    let { label, name, value } = this.props
    let styles = {
      root: {
        marginBottom: 16
      },
      label: {
        fontSize: 14,
        fontWeight: 'bold',
        display: 'block',
        width: '100%',
      },
      input: {
        width: '100%',
      }
    }
    return (
      <div style={styles.root}>
        <label htmlFor={name}
          style={styles.label}>
          {label}
          {' '}
          {value}
        </label>
        <input
          {...this.props}
          type='range'
          name={name}
          style={styles.input} />
      </div>
    )
  }

}

export default Range

