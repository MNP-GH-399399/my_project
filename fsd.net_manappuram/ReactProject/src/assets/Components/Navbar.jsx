import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import { Search, Home, ShoppingCart } from '@mui/icons-material'; // Importing Home and Cart icons
import InputBase from '@mui/material/InputBase'; // Importing input base for the search input
import { styled, alpha } from '@mui/material/styles'; // Styling utilities

// Custom styles for the search bar
const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',  // Set search bar background color to white
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.85),  // Slight opacity on hover
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',  // Set search icon color to black for contrast
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',  // Set input text color to black
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const pages = ['Home', 'ALL PRODUCTS', 'MY ORDERS', 'CART'];
const settings = ['Profile', 'Dashboard', 'Logout'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handlePageNavigation = (page) => {
    handleCloseNavMenu();

    if (page === 'ALL PRODUCTS') {
      navigate('/Products');
    } else if (page === 'CART') {
      navigate('/Cart');
    } else if (page === 'PROFILE') {
      navigate('/Profile');
    } else if (page === 'MY ORDERS') {
      navigate('/Orders');
    } else if (page === 'Home') {
      navigate('/Home');
    }
  };

  const handleSettingNavigation = (setting) => {
    handleCloseUserMenu();
    switch (setting) {
      case 'Profile':
        navigate('/profile');
        break;
      case 'Account':
        navigate('/account');
        break;
      case 'Dashboard':
        navigate('/Home');
        break;
      case 'Logout':
        alert();
        navigate('/Login');
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <AppBar position="fixed" sx={{ backgroundColor: 'purple', color: 'black', boxShadow: 1 }}>
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              ELEGANCE
            </Typography>

            {/* Search Bar */}
            <SearchContainer>
              <SearchIconWrapper>
                <Search />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </SearchContainer>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageNavigation(page)}
                  sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'center' }} // Added flex alignment
                  startIcon={page === 'Home' ? <Home /> : page === 'CART' ? <ShoppingCart /> : null} // Add icons for Home and Cart
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src="/broken-image.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => handleSettingNavigation(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      

     
    </>
  );
};

export default Navbar;
