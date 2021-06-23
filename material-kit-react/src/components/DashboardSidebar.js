import React, { useEffect, useContext } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  BarChart as BarChartIcon,
  LogIn as LogInIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
} from 'react-feather';
import NavItem from './NavItem';

let user = {
  avatar: '/static/images/avatars/guest.png',
  EmpId: '',
  EmpName: 'Guest',
  JobTitle: 'Log In',
  DeptId: '',
  City: '',
  Address: '',
  Phone: '',
  ZipCode: '',
  MonthSalary: '',
  AnnualLeave: ''
};

export const currentUser = React.createContext(user);

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const items = [
    {
      href: '/login',
      icon: LogInIcon,
      title: '登入'
    },
    {
      href: '/app/products',
      icon: ShoppingBagIcon,
      title: '產品基本資料管理'
    },
    {
      href: '/app/account',
      icon: UserIcon,
      title: '帳號'
    },
    {
      href: '/app/dashboard',
      icon: BarChartIcon,
      title: 'Dashboard'
    },
  ];

  user = useContext(currentUser);
  const location = useLocation();
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  if (user.EmpName !== 'Guest') {
    items.splice(5, 1);
  }

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user.EmpName}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.JobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;
