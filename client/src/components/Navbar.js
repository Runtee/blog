import Box from '@mui/material/Box';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Search } from '@mui/icons-material';
import { useState } from 'react';

export default function Navbar() {
    const StyledToobar = styled(Toolbar)({
        display :"flex",
        backgroundColor:"#eff0f3",
        color: 'black',
        fontWeight: ' 700'
    })
    const StyledButton = styled(Button)({
        backgroundColor: '#6246ea',
        color: 'white',
        fontWeight: ' 500',
        '&:hover': {
            backgroundColor: '#6c4fa6',

          },

    });
    const [searchButton, setSearchButton] = useState(true)
    function handle(){
        setSearchButton(prev=> prev ? false: true )
    }

    return (
        <AppBar component="nav" sx={{ backgroundColor:"#eff0f3",
        color: 'black', padding: "0% 5%" }}>
        <StyledToobar>
    
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1}}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

          <Button sx={{mr:1, color: 'black'}}>
                jjj
              </Button>  
              <Button sx={{mr:1, color: 'black'}}>
                jjj
              </Button>
              <Button   sx={{mr:1, color: 'black'}} onClick={handle}>
              <Search>
                search
              </Search>
              Search
              </Button>
              
          </Box>
          <Box>
              <StyledButton>
                Articles
                </StyledButton>  
          </Box>
        </StyledToobar>
      </AppBar>


    );
}
