import './styles.scss'

import { Field } from 'formik'
import React, { useEffect, useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const ICON_SIZE = 26

const AtomInput = ({ placeholder, label, type, className, name, error, touched }) => {
  const [isPassword, setIsPassword] = useState(false)

  const togglePassword = () => {
    setIsPassword(!isPassword)
  }

  useEffect(() => {
    type === 'password' && setIsPassword(true)
  }, [type])

  return (
    <div className="atom_input">
      {label && <p className="label">{label}</p>}
      <div className="input_area">
        <Field
          placeholder={placeholder}
          className={className || 'formulario-input'}
          name={name}
          type={isPassword ? 'password' : 'text'}
        />
        {type === 'password' && (
          <button className="btn_toggle_password" onClick={togglePassword}>
            {isPassword ? (
              <FaRegEyeSlash size={ICON_SIZE} color="#666666" />
            ) : (
              <FaRegEye size={ICON_SIZE} color="#008556" />
            )}
          </button>
        )}
      </div>

      {error && touched ? <div className="input-error">{error}</div> : null}
    </div>
  )
}

export default AtomInput
