import styled from 'styled-components'

export const Container = styled.div`
  background-color: #3d3f43;
  border-radius: 15px;
  padding: 10px;
  min-height: 200px;

  img {
    width: 100%;
    display: block;
    margin-bottom: 13px;
    border-radius: 15px;
  }

  p {
    word-break: break-all;
  }

  .container-buttons {
    display: flex;
    justify-content: space-between;

    .button-view {
      border-radius: 10px;
      border: 2px solid #756df4;
      background: transparent;
      color: #fff;
      transition: all 0.3s;
      cursor: pointer;
      font-weight: bold;

      &:hover {
        background-color: #fff;
        color: #756df4;
      }
    }

    button {
      &:hover {
        opacity: 0.9;
      }
    }
  }
`
