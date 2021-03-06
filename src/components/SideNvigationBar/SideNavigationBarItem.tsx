import React from 'react';
import { useHistory } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

type Item = {
    id: number,
    name: string,
    icon: string,
    path: string,
};

interface SideNavigationBarItemProps {
    item: Item,
};

const SideNavigationBarItem = ( props : SideNavigationBarItemProps) => {
    const { item } = props;
    const history = useHistory();
    const goToPath = (path: string) => {
        history.push(`/${path}`);
    };

    return (
        <ListItem button key={ item.name } onClick={() => goToPath(item.path)}>
            <ListItemIcon>
                <Icon>{item.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={ item.name } />
        </ListItem>
    )
}

export default (SideNavigationBarItem);
