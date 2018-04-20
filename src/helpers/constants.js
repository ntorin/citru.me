export const colors = {
    black: '#000000',
    white: '#FFFFFF',

    primary: '#219591',
    primaryDimmed: 'rgba(33, 149, 145, 0.5)',

    //light theme
    backgroundColor: '#FFFFFF',
    backgroundColorSecondary: '#EAEAEA',

    //dark theme
    backgroundColorDark: '#000000',
    backgroundColorSecondaryDark: '#282828',
}

export const getBackgroundColor = (darkEnabled) => {
    return darkEnabled ? colors.backgroundColorDark : colors.backgroundColor;
}

export const getBackgroundColorSecondary = (darkEnabled) => {
    return darkEnabled ? colors.backgroundColorSecondaryDark : colors.backgroundColorSecondary;
}