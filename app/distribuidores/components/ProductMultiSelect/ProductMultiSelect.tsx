'use client'

import { Select } from 'antd'
import React from 'react'

interface Props {
  value: number[]
  onChange: (vals: number[]) => void
  options: Array<{
    label: string
    key: string | number
    options: Array<{ label: string; value: number; key: number }>
  }>
}

export default function ProductMultiSelect({ value, onChange, options }: Props): React.JSX.Element {
  return (
    <div className="flex items-center border rounded-md p-2 bg-white shadow">
      <span className="text-green mr-2">💉</span>
      <Select
        mode="multiple"
        size="middle"
        placeholder="Selecciona productos de interés"
        value={value}
        onChange={onChange}
        style={{ width: '100%' }}
        options={options}
        virtual={false}
      />
    </div>
  )
}
