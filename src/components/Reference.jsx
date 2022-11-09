import React, { useRef } from 'react'

export const Reference = () => {
  const inputRef = useRef();
  console.log(inputRef);

  return (
    <div>
      <h1>Reference</h1>
      <input type="text" ref={inputRef} />
      <button onClick={()=> inputRef.current.focus()}>Focus</button>
      <input  id='input-focus' type="text" />
      <p>forma tradicional</p>
      <button  onClick={()=> handleFocus}>Focus</button>
    </div>
  )
}
