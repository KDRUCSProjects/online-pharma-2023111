import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <React.Fragment>
        <Link to={'/dashboard/'} style={{ textDecoration: 'none' }}>
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
        </Link>
        <Link to={'order/list/'} style={{ textDecoration: 'none' }}>
            <ListItemButton>
                <ListItemIcon>
                    <ShoppingCartCheckoutIcon />
                </ListItemIcon>
                <ListItemText primary="Order" />
            </ListItemButton>
        </Link>
        <Link to={'prescription/list/'} style={{ textDecoration: 'none' }}>
            <ListItemButton>
                <ListItemIcon>
                    <HistoryEduIcon />
                </ListItemIcon>
                <ListItemText primary="Prescription" />
            </ListItemButton>
        </Link>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Reports
        </ListSubheader>
        <Link to={'day/report'} style={{ textDecoration: 'none' }}>
            <ListItemButton>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="day report" />
            </ListItemButton>
        </Link>
    </React.Fragment>
);
