import React, { useState } from 'react'

import './App.css'

export default function App() {
  const [left, setLeft] = useState('0')
  const [right, setRight] = useState('')
  const [operator, setOperator] = useState('')

  function handleValue() {}
  function handleOperator() {}
  function handleEquals() {}

  return (
    <div>
      <div className="display">0</div>

      <div className="btns">
        <div className="row-1">
          <button>AC</button>
          <button>÷</button>
        </div>

        <div className="row-2">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>

        <div className="row-3">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>

        <div className="row-4">
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  )
}
