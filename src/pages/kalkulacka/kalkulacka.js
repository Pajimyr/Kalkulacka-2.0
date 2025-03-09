import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import { toast } from 'react-toastify';
import { toastIt } from "../../utils/toastify";

export const Kalkulacka = () => {
  const [history, setHistory] = useState([])
  const [string, setString] = useState("")
  const cisla =  ["1","2", "3","4","5","6","7","8","9","0","."]
  const operator= [" + "," - "," / "," * "]

  const historyToString = () => {
    setString(history[history.length - 1])
  }

  const addSymbol = (item)=> {
    setString(prevstring => prevstring + item)
  }
  
  const deletePrevious = () => {
      toastIt(()=> {
        if(string === "") throw new Error("Už je to smazané")
        setString(string.slice(0, -1))
      }, "Vymazáno")
  }
  const clear = () => {
    toastIt(() => {
      if(string === "") throw new Error("Už je to smazané")
      setString("")
    }, "Vymazáno")
  }
  const evaluate = () => 
    toastIt(() => {
        if (string.includes('=')) throw new Error("Priklad uz byl jednou spocitany");
        if(string.includes("/ 0")) throw new Error("Nemůžeš dělit nulou.")
        const vysledek = eval(string)
        const priklad = string + " = " + vysledek
        setString(priklad)
    }, 'Vypočítáno');

  const toHistory = () => {
    
    setHistory(prevHistory => [...prevHistory, string]);
  }

  return <Box sx={{
    height:"100%",
    backgroundColor:"black",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    
  }}>
          <Typography sx={{
                pl:"15px",
                display:"flex",
                alignItems:"center",
                borderRadius:"10px",
                border:"1px solid gold",
                width:"41vw",
                height:"10vh",
                color:"white",
                '@media screen and (max-width: 1300px)': {
                  height:"85px",
                  width:"520px"
              }
              }}>
                {string}
                
          </Typography>

        <Box sx={{
          display:"flex"
        }}>
          <Box sx={{
                  width:"30vw",
                  height:"60vh",
                  marginTop:"20px",
                  display:"grid",
                  gridTemplateColumns:"10vw 10vw 10vw",
                  gridTemplateRows:"15vh 15vh 15vh 15vh",
                  backgroundColor:'#EFBF04',
                  borderRadius:"10px",
                  
                  '@media screen and (max-width: 1300px)': {
                    height:"500px",
                    width:"400px",
                    gridTemplateRows:"120px 120px 120px 120px",
                    gridTemplateColumns:"120px 150px 150px",
                }

                }}>
                  {cisla.map((item,index) => (
                    <Button onClick={() => {addSymbol(item)}} key={index} sx={{
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"center",
                      fontSize:"30px",
                      color:"white",
                      borderRadius:"0px"
                    }}>
                      {item}
                    </Button>
                  ))}
            </Box>
            <Box sx={{
                width:"10vw",
                height:"60vh",
                marginTop:"20px",
                marginLeft:"20px",
                display:"grid",
                gridTemplateColumns:"10vw",
                gridTemplateRows:"7vh 7vh 7vh 7vh 7vh",
                
                '@media screen and (max-width: 1300px)': {
                  height:"500px",
                  width:"100px",
                  gridTemplateRows:"50px 50px 50px 50px 50px",
                  gridTemplateColumns:"100px",
              }
            }} >
              {operator.map((item,index)=> (
                <Button key={index} onClick={() => addSymbol(item)} sx={{
                  backgroundColor: '#EFBF04', // Barva pozadí podle tématu
                  color: 'white', // Barva textu
                  borderRadius: '8px', // Zaoblení rohů
                  fontSize:"35px",
                  fontWeight:"900",
                  mt:"5px",
                  mb:"5px",
                  '&:hover': {
                    backgroundColor: 'gold',
                    boxShadow:"0px 0px 30px yellow",

                  },
            }}>
                  {item}
                </Button>
              ))}
              <Button sx={{
                    backgroundColor: '#EFBF04', // Barva pozadí podle tématu
                    color: 'white', // Barva textu
                    borderRadius: '8px', // Zaoblení rohů
                    fontSize:"35px",
                    mt:"5px",
                    mb:"5px",
                    '&:hover': {
                      backgroundColor: 'gold', // Změna barvy při najetí myší
                      boxShadow:"0px 0px 30px yellow",
                    },
              }} onClick={() => evaluate()} >=</Button>
              <Button onClick={() => clear()} sx={{
                    backgroundColor: 'darkred', // Barva pozadí podle tématu
                    color: 'white', // Barva textu
                    borderRadius: '8px', // Zaoblení rohů
                    fontSize:"15px",
                    mt:"5px",
                    mb:"5px",
                    '&:hover': {
                      backgroundColor: 'red', // Změna barvy při najetí myší
                      boxShadow:"0px 0px 30px darkred",
                    },
              }}>CLEAR</Button>
              <Button onClick={() => deletePrevious()} sx={{
                    backgroundColor: 'darkred', // Barva pozadí podle tématu
                    color: 'white', // Barva textu
                    borderRadius: '8px', // Zaoblení rohů
                    fontSize:"15pxpx",
                    mt:"5px",
                    mb:"5px",
                    '&:hover': {
                      backgroundColor: 'red', // Změna barvy při najetí myší
                      boxShadow:"0px 0px 30px darkred",
                    },
              }}>DEL</Button>
              <Button onClick={() => toHistory()} sx={{
                    backgroundColor: 'darkred', // Barva pozadí podle tématu
                    color: 'white', // Barva textu
                    borderRadius: '8px', // Zaoblení rohů
                    fontSize:"15pxpx",
                    mt:"5px",
                    mb:"5px",
                    '&:hover': {
                      backgroundColor: 'red', // Změna barvy při najetí myší
                      boxShadow:"0px 0px 30px darkred",
                    },
              }}>HIS</Button>
            </Box>
            
        </Box>
          
        <Box sx={{
          width:"41vw",
          height:"fit-content",
          border:"1px solid gold",
          borderRadius:"5px",
          mt:"10px",
          display:"flex",
          flexDirection:"column",
          minHeight:"150px",
          maxHeight:"150px",
          overflowY:"scroll"
        }}>
              {history.map(x => (
                <Button sx={{
                  fontSize:"20px",
                  color:"gold",
                  fontWeight:"700",
                  '&:hover': {
                      backgroundColor: '#d9a600', // Změna barvy při najetí myší
                      boxShadow:"0px 0px 30px yellow",
                    },
                }} onClick={() => historyToString()}>{x}</Button>
              ))}
        </Box> 
  </Box>

}