import { useState } from 'react'
import styles from './Toggle.module.scss'
import classNames from 'classnames/bind'

function Toggle() {
  const [toggle, setToggle] = useState(false)
  const cx = classNames.bind(styles)

  const onClickToggle = () => {
    setToggle((prevState) => !prevState)
  }

  return (
    <div className='wrap'>
      <h2 className='title'>Toggle</h2>
      <div className={cx(styles.contents)}>
        <div className={cx({ slider: true, selected: toggle })} />
        <button type='button' className={styles.item} onClick={onClickToggle} value={toggle}>
          기본
        </button>
        <button type='button' className={styles.item} onClick={onClickToggle} value={toggle}>
          상세
        </button>
      </div>
    </div>
  )
}

export default Toggle
