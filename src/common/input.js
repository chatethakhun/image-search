import React from 'react'
import { TextfieldContainer } from './style/theme'

export const Textfield = ({
  type = 'text',
  placeholder,
  value,
  icon,
  onChange,
  onKeyUp,
  margin
}) => (
  <TextfieldContainer margin={margin} indent={icon && "35px"}>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={evt => {
          onChange(evt.target.value)
      }}
      onKeyUp={evt => onKeyUp(evt.keyCode)}
    />
    {
      icon && 
      <div style={{
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)"
      }}>
        <i className={`fas fa-${icon}`}></i>
      </div>
    }
  </TextfieldContainer>
)
