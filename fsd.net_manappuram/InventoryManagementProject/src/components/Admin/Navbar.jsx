import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from "react-router-dom";
import Products from './Products';
import { Dashboard } from '@mui/icons-material';







const pages = ['Home', 'ALL PRODUCTS', 'CART','MY ORDERS','PROFILE'];
const settings = ['Profile',  'Dashboard', 'Logout'];




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
    //alert(page);
     handleCloseNavMenu();

    
    if (page === 'ALL PRODUCTS') {      
        navigate('/Products');
  } else if (page === 'CART') {
    navigate('/Products');
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

    
    <AppBar position="fixed" sx={{ backgroundColor: ' #90fae8 ', color: 'black', boxShadow: 1 }}>
    <Container maxWidth={false}>
        <Toolbar disableGutters>
<Typography
variant="h6"
noWrap
component="a"
href="#app-bar-with-responsive-menu"
sx={{
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
}}
>
SHOPPING</Typography>
            {/* ... (rest of the AppBar content remains the same) ... */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={() => handlePageNavigation(page)}
                        sx={{ my: 2, color: 'black', display: 'block' }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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


  )
}

export default Navbar
