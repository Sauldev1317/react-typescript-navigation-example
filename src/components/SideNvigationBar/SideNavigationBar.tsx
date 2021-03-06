import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import SideNavigationItem from './SideNavigationBarItem';
import { Divider } from '@material-ui/core';

const drawerWidth = 240;
const menuItem = [
    {
      id: 1,
      name: "Books",
      icon: "home",
      path: "home",
    },
    {
      id: 2,
      name: "Add",
      icon: "add",
      path: "add-book"
    }
];

const SideNavigation = () => {
    const classes = useStyles();
    return (
        <>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {menuItem.map((item, index) => (
                          <SideNavigationItem key={index} item={item}/>
                        ))}
                    </List>
                </div>
                <Divider />
            </Drawer>
        </>
    )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);


export default (SideNavigation);
