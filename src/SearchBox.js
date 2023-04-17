import React, { useState } from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


function SearchBox() {
    const [searchText, setSearchText] = useState("")
    return (<div style={{display: "flex", flexDirection: "column"}}>
        <OutlinedInput value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
        <Button variant="contained" color="primary">
        Search
        </Button>
        <List component="nav" aria-label="contacts">
        {[1,2,3,4].map((item) => {
            return(
            <ListItem button>
                <ListItemIcon>
                <img src="./pin.png" alt="pin" style={{width: 30, height: 30}}/>
                </ListItemIcon>
                <ListItemText primary={item} />
            </ListItem>
            )
        })
            
        }
        </List>
    </div>);
}

export default SearchBox;