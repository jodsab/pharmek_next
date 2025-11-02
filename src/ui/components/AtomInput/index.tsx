// ui/components/AtomInput/index.tsx

// ❌ import './styles.scss'  <-- quítalo (lo importamos en layout globalmente)

import { Field } from 'formik'
import React, { useEffect, useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const ICON_SIZE = 26

type AtomInputProps = {
  placeholder?: string | undefined
  label?: string | undefined
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'] | undefined
  className?: string | undefined
  name: string
  error?: string | undefined
  touched?: boolean | undefined
}

const AtomInput = ({
  placeholder,
  label,
  type,
  className,
  name,
  error,
  touched
}: AtomInputProps): React.JSX.Element => {
  const [isPassword, setIsPassword] = useState(false)

  useEffect(() => {
    setIsPassword(type === 'password')
  }, [type])

  const togglePassword = (): void => {
    setIsPassword(prev => !prev)
  }

  // type real que usará el Field
  const inputType: React.InputHTMLAttributes<HTMLInputElement>['type'] = isPassword
    ? 'password'
    : (type ?? 'text')

  return (
    <div className="atom_input">
      {label && <p className="label">{label}</p>}
      <div className="input_area">
        <Field
          placeholder={placeholder}
          className={className ?? 'formulario-input'}
          name={name}
          type={inputType}
          aria-invalid={!!error && !!touched}
          aria-describedby={error && touched ? `${name}-error` : undefined}
        />

        {type === 'password' && (
          <button
            type="button" // ✅ evita submit accidental
            className="btn_toggle_password"
            onClick={togglePassword}
            aria-label={isPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            {isPassword ? (
              <FaRegEyeSlash size={ICON_SIZE} color="#666666" />
            ) : (
              <FaRegEye size={ICON_SIZE} color="#008556" />
            )}
          </button>
        )}
      </div>

      {error && touched ? (
        <div id={`${name}-error`} className="input-error">
          {error}
        </div>
      ) : null}
    </div>
  )
}

export default AtomInput
