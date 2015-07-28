
import React from 'react'
import Input from './Input'
import Range from './Range'

class Form extends React.Component {

  render() {
    let {
      h,
      s,
      hues,
      steps,
      swing,
      padL,
      handleChange
    } = this.props

    let pad = 8

    let styles = {
      row: {
        marginLeft: -pad,
        marginRight: -pad,
      },
      table: {
        display: 'table',
        width: '100%',
        tableLayout: 'fixed'
      },
      cell: {
        display: 'table-cell',
        paddingLeft: pad,
        paddingRight: pad
      }
    }

    return (
      <div>
        <div style={styles.row}>
          <div style={styles.table}>
            <div style={styles.cell}>
              <Range
                label='Hue'
                name='h'
                max={360}
                value={h}
                onChange={handleChange} />
            </div>
            <div style={styles.cell}>
              <Range
                label='Hue Swing'
                name='swing'
                min={-100}
                max={100}
                value={swing}
                onChange={handleChange} />
            </div>
            <div style={styles.cell}>
              <Range
                label='Saturation'
                name='s'
                max={100}
                value={s}
                onChange={handleChange} />
            </div>
            <div style={styles.cell}>
              <Range
                label='Pad Lightness'
                name='padL'
                max={50}
                value={padL}
                onChange={handleChange} />
            </div>
          </div>
          <div style={styles.table}>
            <div style={styles.cell}>
              <Input type='number'
                label='Hues'
                name='hues'
                value={hues}
                onChange={handleChange} />
            </div>
            <div style={styles.cell}>
              <Input
                type='number'
                label='Steps'
                name='steps'
                value={steps}
                onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Form

