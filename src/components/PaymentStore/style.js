import styled from "styled-components"
export const body =styled.div`
  background:  #F5F5DC;
  display: grid;
  border-collapse: collapse;
  font-family: "Varela Round", sans-serif;
  text-align: ${(props) => props.textAlign};
  margin: ${(props) => props.margin};
`
export const Button = styled.button`

  background: ${props => props.primary ? "gold" : "white"};
  color: ${props => props.primary ? "white" : "gold"};

  font-size: 1em;
  margin: 1em;
  padding: 0.15em 1em;
  border: 2px solid darkgoldenrod;
  border-radius: 2px;
`

export const Space =styled.div`
  white-space: pre-line;
`
export const CheckBox =styled.input`

  font-size: 20px;
  font-family: "Varela Round", sans-serif;
`
export const Checkbox =styled.input`
  font-family: "Varela Round", sans-serif;
  font-size: 17px;
  color: ${props => props.inputColor || "palevioletred"};

  border: none;
  border-radius: 3px;
`
export const TextArea =styled.textarea`
  grid-gap: 10px;
  margin: 10px;
  width: 1300px;
  height: 50px;
  font-family: "Varela Round", sans-serif;
  font-size: 17px;
`
export const lastName =styled.div`
  grid-gap: 10px;
  margin: 10px;
  width: 1300px;
  height: 50px;
  font-family: "Varela Round", sans-serif;
  font-size: 17px;
`
export const zip =styled.div`
  grid-gap: 10px;
  margin: 10px;
  width: 1300px;
  height: 50px;
  font-family: "Varela Round", sans-serif;
  font-size: 17px;
`
export const phoneNumber =styled.div`
  grid-gap: 10px;
  margin: 10px;
  width: 1300px;
  height: 50px;
  font-family: "Varela Round", sans-serif;
  font-size: 17px;
`




