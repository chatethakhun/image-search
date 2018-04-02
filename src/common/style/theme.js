import styled from 'styled-components'

const SKY_COLOR = "#4281A4"
export const Wrapper = styled.div`
  text-align: center;
  padding: ${({padding}) => padding || null};
  display: ${({display}) => display || null};
  background-color: ${({ bgColor }) => bgColor || null};
  height: ${({height}) => height || null};
  width: ${({width}) => width || null};
  margin: ${({margin}) => margin || null};
  min-height: ${({minHeight}) => minHeight || null}
`

export const TextfieldContainer = styled.div`
width: 100%;
margin: ${props => props.margin || null};
position: relative;
  > input {
    height: 30px;
    border: 1px solid #999;
    border-radius: 3px;
    width: 100%;
    text-indent: ${({ indent }) => indent || null};
    font-size: 16px;
    &::placeholder {
      color: #ddd;
      text-align: center;
    }
  > div {
      border: 1px solid red;
      position: absolute;
    }
  }
`


export const Button = styled.button`
  width: 170px;
  margin: ${props => props.margin || null};
  background-color: ${SKY_COLOR};
  border: none;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
`

export const FeedContainer = styled.div`
  width: 100%;
  background-color: white;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  > img {
    width:100%;
  }
`