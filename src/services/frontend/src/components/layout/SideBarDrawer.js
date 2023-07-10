import React, { useState } from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {
    Drawer,
    Box,
    IconButton,
    ListSubheader,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@mui/material';

const SideBarDrawer = () => {
    const [open, setOpen] = useState(true);
    const [sideOpen, setSideOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Box>
            <IconButton onClick={() => setSideOpen(true)}>
                <MenuOutlinedIcon />
            </IconButton>
            <Drawer open={sideOpen} onClose={() => setSideOpen(false)}>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 260,
                        bgcolor: 'background.paper',
                        marginRight: 5,
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader
                            component="div"
                            id="nested-list-subheader"
                        >
                            Nested List Items
                        </ListSubheader>
                    }
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sent mail" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItemButton>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Drawer>
        </Box>
    );
};

export default SideBarDrawer;
