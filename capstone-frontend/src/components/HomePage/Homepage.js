import { Link } from "react-router-dom";
import { OrderContext } from '../../containers/Container.js';
import { useContext } from "react";
import Sidebar from "./Sidebar.js";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';



const Homepage = () => {

    const {currentOrder} = useContext(OrderContext);

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      }));

    return(
    <div>


    {/* <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` } }}> */}
    <Box component="main">
        <DrawerHeader />
        <Typography paragraph>
            <Link to="/OrderListPage">view order page</Link>
                <br/>
                {currentOrder? 
            (<Link to={`/OrderPage/${currentOrder.id}`}>view current order page </Link>): "no order on going yet"}
        </Typography>
            </Box>
        </div>)
}

export default Homepage;