import { useState } from 'react'
import styles from './Slider.module.scss'
import classNames from 'classnames'

function Slider() {
  const [result, setResult] = useState(1)
  const [toggle, setToggle] = useState(false)
  const rangeValues = [1, 25, 50, 75, 100]
  const cx = classNames.bind(styles)

  const onChangeInputRange = (e) => {
    setResult(e.target.value)
    setToggle(false)
  }

  const onClickProgressPoint = (e) => {
    setResult(e.target.value)
    setToggle(true)
  }

  return (
    <div className='wrap'>
      <div className='title'>Slider</div>
      <div className={cx(styles.interfaceContainer)}>
        <span className={cx(styles.interfaceContent)}>{result}</span>
        <span className={cx(styles.interfacePercent)}>%</span>
      </div>

      <div className={cx(styles.slideContainer)}>
        <div className={cx(styles.fillLower)} style={{ width: `${result}%` }} />
        <input
          type='range'
          name='points'
          min='1'
          max='100'
          step='1'
          list='progressPoint'
          value={result}
          className={`${styles.slider}`}
          onChange={onChangeInputRange}
        />
        <div className={styles.slideMarks}>
          {rangeValues.map((value, index) => {
            return (
              <div key={`range-${value}`} className={`${styles.slideMark} ${result >= value ? styles.selected : ''}`} />
            )
          })}
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <datalist id='progressPoint'>
          {rangeValues.map((value, index) => {
            return (
              <option
                key={`progress-${value}`}
                value={value}
                label={`${value}%`}
                className={toggle && result === `${value}` ? styles.selected : ''}
                onClick={onClickProgressPoint}
              />
            )
          })}
        </datalist>
      </div>
    </div>
  )
}

export default Slider
