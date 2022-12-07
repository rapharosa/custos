import { Box, Typography } from "@mui/material";
import { Formulario } from "./components/Form";

function App() {
  return (
    <Box className='App' display='flex' flexDirection='column' alignItems='center'>
      <Typography variant="h2" textAlign='center' marginTop={3}>Insira os dados e retornamos os valores</Typography>
      <Formulario />
      
    </Box>

  );
}

export default App;
