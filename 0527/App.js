import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

function ButtonStytle() {
  return (
    <Button variant="contained" color="primary">
      我是自帶樣式的按鈕
    </Button>
  )
}

function InputWithIcon() {
  return (
    <div>
      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField type="email" label="E-mail" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function BasicTextFields() {

  return (
    <form>
      <TextField id="filled-basic"
        variant="outlined"
        type="date" />
    </form>
  );
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={<Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />}
      label="Checkbox測試"
    />
  )
}

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={outerTheme}>
      <div className="App">
        <header className="App-header">
          <AppBar position="fixed">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
              <Typography variant="h6">
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Typography variant="h2" component="h3">
            歡迎來到MUI
          </Typography>
          <ButtonStytle />
          <InputWithIcon />
          <BasicTextFields />
          <CheckboxExample />
          <ButtonGroup>
            <Button
              size="large"
              onClick={() => { alert('clicked') }}
              variant="contained">
              Click Me!
            </Button>

            <Button
              variant="contained"
              color="secondary"
              size="small"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
