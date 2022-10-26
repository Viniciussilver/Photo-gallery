import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    
  }
`

export const Container = styled.div`
  background-color: #27282f;
  color: #fff;
  min-height: 100vh;
`

export const Area = styled.div`
  margin: 0 auto;
  max-width: 980px;
  padding: 30px 0;
`

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 30px;
`

export const ScreenWarning = styled.div`
  text-align: center;
  margin-top: 60px;

  .emoji {
    font-size: 50px;
    margin-bottom: 20px;
  }
`

export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media screen and (max-width: 940px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const UploadForm = styled.form`
  background-color: #3d3f43;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;

  span {
    margin-left: 20px;
  }

  input[type='submit'] {
    background-color: #756df4;
    border: none;
    color: #fff;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`
