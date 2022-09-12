import Box from '@mui/material/Box';
import { AppBar, Button, InputBase, Toolbar, Typography } from '@mui/material';
import {styled} from '@mui/material/styles';
import  SearchIcon  from '@mui/icons-material/Search';
import { useState } from 'react';

export default function Navbar() {
  const StyledToobar = styled(Toolbar)({
    display: "flex",
    backgroundColor: "#0a32ab",
    color: 'white',
    fontWeight: ' 700',
  })
  const StyledButton = styled(Button)({
    backgroundColor: '#6a709d',
    color: 'white',
    fontWeight: ' 500',
    '&:hover': {
      backgroundColor: '#9397b3',

    },

  });

  const [searchButton, setSearchButton] = useState(true)
  function handle() {
    setSearchButton(prev => prev ? false : true)
  }
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#9595957a",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      // marginLeft: theme.spacing(3),
      width: 'auto',
    },
    marginRight: '8px',
    display: 'inline-flex'
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  return (
    <AppBar component="nav" sx={{
      backgroundColor: "#0a32ab",
      color: 'white', padding: "0% 5%", position: "sticky"
    }}>
      <StyledToobar>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          MUI
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>

          <Button sx={{ mr: 1, color: 'white' }}>
            Home
          </Button>
          <Button sx={{ mr: 1, color: 'white' }}>
            About
          </Button>
          {/* <Button sx={{ mr: 1, color: 'white' }} onClick={handle}>
            <SearchIcon/>
            Search
          </Button> */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
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
