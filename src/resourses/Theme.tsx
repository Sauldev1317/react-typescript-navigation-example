import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
        ].join(','),
    },
});


export default (Theme);