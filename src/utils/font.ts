export const getTextAlign = (textAlign = 'left') => {
    const textAlignMap = {
        left: 'text-left',
        right: 'text-right',
        center: 'text-center',
    }
    return `${textAlignMap[textAlign || '']}`
}

export const getFontSizeHeading = (level = '1') => {
    const fontSizeMap = {
        1: 'text-6xl',
        2: 'text-5xl',
        3: 'text-4xl',
        4: 'text-xs',
        p: 'text-base',
    }
    return `${fontSizeMap[level] || ''}`
}

export const getFontColor = (color) => {
    const fontColorMap = {
        base: 'text-white',
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary',
        contrast: 'text-black',
    }
    return `${fontColorMap[color] || ''}`
}

export const getFont = (font) => {
    const fontMap = {
        body: 'font-body',
        heading: 'font-heading',
    }
    return `${fontMap[font] || ''}`
}
