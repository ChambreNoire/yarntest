import React, {useState} from 'react';

interface INumberProps {
  initValue: number
}

const Numbers = (props: INumberProps) => {
  const [value, setValue] = useState(props.initValue)

  const onIncrement = () => {
    setValue(value + 1)
  }

  const onDecrement = () => {
    setValue(value - 1)
  }

  return (
    <div>
      Number is {value}
        <div>
          <button onClick={onIncrement}>+</button>
          <button onClick={onDecrement}>-</button>
        </div>
    </div>
  )
}
export default Numbers