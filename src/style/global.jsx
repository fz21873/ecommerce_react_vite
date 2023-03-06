import { createGlobalStyle } from "styled-components"
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
    color:#000
  }
  .form{
    background-color: #576273;
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 5px;  
  }
  form{
    display: flex;
    flex-direction: column;
    justify-content  : center;
  
    width: 90%;
    height: 670px;
    padding: 2%;
    gap:10px;
    color: rgba(255, 255, 255, 0.5);

label{
    display: flex;
    width: 100%;
}

input[type='text']{
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 5px;
        background-color: transparent;
        width: 100%;
        height: 100px;
        padding-left: 12px;

    }

.options{
        width: 100%;
        display:grid;
        gap: 10px;
        button{
            background-color: transparent;
            color: #DFDF0E;
        }
 
    }
  }

  button {
    cursor: pointer; 
  
  }
  button[type='submit']{
        background-color:#DFDF0E ;
        width: 100%;
        border-radius: 0%;
    }
//==================paginas
 

`