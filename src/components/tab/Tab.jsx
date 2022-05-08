import { useState } from 'react'
import styles from './Tab.module.scss'
import classNames from 'classnames'

function Tab() {
  const tabs = ['감자', '고구마', '카레라이스']
  const [coordinateValue, setCoordinateValue] = useState(0)
  const translateX = { transform: `translateX(${coordinateValue}px)` }
  const cx = classNames.bind(styles)

  const onChangeList = (e) => {
    const { textContent } = e.currentTarget
    // 감자를 선택한 경우
    if (textContent === tabs[0]) {
      setCoordinateValue(0)
    }
    // 고구마를 선택한 경우
    if (textContent === tabs[1]) {
      setCoordinateValue(100)
    }
    // 카레라이스를 선택한 경우
    if (textContent === tabs[2]) {
      setCoordinateValue(200)
    }
  }
  return (
    <div className='wrap'>
      <h3 className='title'>Tab</h3>
      <div className={cx(styles.tabList)}>
        {tabs.map((tab) => {
          return (
            <div role='button' key={tab} className={cx(styles.tab)} onClick={onChangeList} tabIndex={0} value={tabs}>
              {tab}
            </div>
          )
        })}
      </div>
      <div className={cx(styles.slideContainer)}>
        <div className={cx(styles.slider)} style={translateX} />
      </div>
    </div>
  )
}

export default Tab
