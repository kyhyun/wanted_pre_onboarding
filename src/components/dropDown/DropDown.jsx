import { useState, useCallback } from 'react'
import styles from './DropDown.module.scss'
import classNames from 'classnames'

import { CaretDown, Magnifying } from '../../assets/svgs/index'

function DropDown() {
  const [chooseItem, setChooseItem] = useState('All Symbols')
  const [search, setSearch] = useState('')
  const [toggle, setToggle] = useState(false)
  const symbols = ['All Symbols', 'ETHUSD.PERP', 'BCHUSD.PERP', '1000SHIBUSD.PERP']
  const cx = classNames.bind(styles)

  const onClickDropButton = useCallback(() => {
    setToggle((prevState) => !prevState)
  }, [])

  const onClickSearchItem = useCallback((e) => {
    setChooseItem(e.currentTarget.textContent)
  }, [])

  return (
    <div className='wrap'>
      <div className='title'>DropDown</div>
      <div className={cx(styles.dropContainer)}>
        <div className={cx(styles.dropButtonContent)}>
          <button type='button' className={cx(styles.dropButton)} onClick={onClickDropButton}>
            {chooseItem}
          </button>
          <CaretDown />
        </div>
        {!toggle && (
          <div className={cx(styles.searchContainer)}>
            <div className={cx(styles.searchContent)}>
              <Magnifying className={cx(styles.faSearch)} />
              <input
                type='text'
                placeholder='Search Symbol'
                className={cx(styles.searchBar)}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className={cx(styles.searchItems)}>
              {symbols
                .filter((data) => {
                  if (search === '') {
                    return data
                  }
                  const isMatch = data.toLowerCase().includes(search.toLowerCase())
                  return isMatch || data === 'All Symbols' ? data : ''
                })
                .map((value, index) => {
                  return (
                    <div
                      role='button'
                      key={`data-${value}}`}
                      className={cx(styles.searchItem)}
                      onClick={onClickSearchItem}
                      tabIndex={0}
                    >
                      {value}
                    </div>
                  )
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DropDown
