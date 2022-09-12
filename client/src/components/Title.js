import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Title() {
    return (

        <ThemeProvider theme={theme}>

            <Box sx={{ padding: "0% 8% 5% 8%", flexGrow: 1, borderBottom: '0.5px ridge #bbbbbb',
        lineHeight:'40px',
        }}>
                <Typography
                    variant="h2"
                >
                    Finibus Bonorum et Malorum
                </Typography>
                <Box sx={{ display: 'inline-block' }}>
                    <Typography
                        variant="h5"
                        sx={{ marginRight: '15px', display: 'inline-block' }}
                    >
                        Written by John doe
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{ display: 'inline-block', color: '#555' }}
                    >
                        Monday May 20
                    </Typography>
                </Box>

            </Box>
        </ThemeProvider>
    )
}