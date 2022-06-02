import primaryTheme from './themes/primaryTheme';
import primaryThemeDark from './themes/primaryThemeDark';
const themes={
    primaryTheme,
    primaryThemeDark
}

export default function getTheme(theme){
    return themes[theme]
}