import styled from 'styled-components'

interface IOpen {
  open: boolean
}

export const Container = styled.div<IOpen>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${({ open }) => (open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  div {
    width: 70%;
    position: relative;

    @media screen and (max-width: 980px) {
      width: 96%;
      margin-right: 4px;
    }
  }

  img {
    width: 100%;
    border-radius: 7px;
  }

  button {
    position: absolute;
    top: 5px;
    right: 6px;
    width: 30px;
    height: 25px;
    cursor: pointer;
  }
`
