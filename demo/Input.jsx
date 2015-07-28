
import React from 'react'

class Input extends React.Component {

  render() {
    let { type, label, name } = this.props
    type = type || text
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
        boxSizing: 'border-box',
        width: '100%',
        fontSize: 16,
        padding: '4px 8px',
        fontFamily: 'inherit'
      }
    }
    return (
      <div style={styles.root}>
        <label htmlFor={name}
          style={styles.label}>
          {label}
        </label>
        <input
          {...this.props}
          type={type}
          name={name}
          style={styles.input} />
      </div>
    )
  }

}

export default Input

