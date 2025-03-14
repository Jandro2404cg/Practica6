import {Drawer , IconButton} from "@mui/material";

function MenuIcon(){
    return null;
}
const Sidebar = () => {
    let drawerOpen;
    return (

        <div>
        <IconButton edge = "start" onClick = {toggleDrawer(true)}>
            <MenuIcon />
        </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={}

            </Drawer>
        </div>
    )};


export default Sidebar;
