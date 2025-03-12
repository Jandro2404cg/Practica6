import {Box,Typography} from "@mui/material";

const Layout =({ children}) => {
   return(
    <div>
    <Box>
    <container>
        {children}
    </container>
    </Box>
    <box>
            <Typography variant="h4" component="h1" sx={{mb:2}}>
                Derechos Reservados
            </Typography>
    </box>
    </div>
   )};

export default Layout;