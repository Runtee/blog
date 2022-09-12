import { Box } from "@mui/material";
import Body from "../Body";
import CenterImage from "../CenterImage";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Title from "../Title";

import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);
export default function Blog(){
return(
<ThemeProvider theme={theme}>

<Box>
<Navbar/>
<CenterImage/>
<Title/>
<Body/>
<Footer/>
</Box>
</ThemeProvider>

)

}