import { useState, useEffect, useCallback } from 'react'
import styles from './Input.module.scss'
import { EyeSlash, Eye, CircleCheck } from '../../assets/svgs/index'
import classNames from 'classnames'

function Input() {
  const [email, setEmail] = useState('')
  const [emailCheck, setEmailCheck] = useState(false)
  const [password, setPassword] = useState('')
  const [shouldShowPW, setShouldShowPw] = useState(false)
  const [inputType, setInputType] = useState('password')
  const cx = classNames.bind(styles)

  const toggleShowPW = () => {
    setShouldShowPw((prevState) => !prevState)
    setInputType((prevState) => (prevState === 'password' ? 'text' : 'password'))
  }

  const confirmValidEmail = useCallback(() => {
    const mailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-]+$/
    const isValid = mailRegExp.test(email)
    if (isValid) {
      setEmailCheck(true)
    } else {
      setEmailCheck(false)
    }
  }, [email])

  useEffect(() => {
    confirmValidEmail()
  }, [confirmValidEmail])

  const onChangeEmail = (e) => {
    setEmail(e.currentTarget.value)
  }

  const onChagenPassword = (e) => {
    setPassword(e.currentTarget.value)
  }
  return (
    <div className='wrap'>
      <div className='title'>Input</div>
      <div className={cx(styles.inputContainer)}>
        <div className={cx(styles.contentTitle)}>E-mail</div>
        <div className={cx(styles.inputContent)}>
          <input type='email' placeholder='E-mail' onChange={onChangeEmail} />
          <CircleCheck className={`${cx(styles.favicon)}${emailCheck ? styles.valid : ''}`} />
        </div>
        {email && !emailCheck && <div className={cx(styles.invalid)}>Invalid e-mail address</div>}

        <div className={cx(styles.contentTitle)}>Password</div>
        <div className={cx(styles.inputContent)}>
          <input type={inputType} placeholder='Password' value={password} onChange={onChagenPassword} />
          {shouldShowPW ? (
            <Eye className={`${cx(styles.favicon)}`} fill='rgb(238, 64, 189)' onClick={toggleShowPW} />
          ) : (
            <EyeSlash onClick={toggleShowPW} className={cx(styles.favicon)} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Input
