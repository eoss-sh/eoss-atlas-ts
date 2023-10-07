import React from 'react'
import { getFont, getFontColor, getFontSizeHeading, getTextAlign } from '../utils/font'

type HeadingProps = {
    content: string
    level: string
    textAlign?: string
    font?: string
    color?: string
}

export const Heading = ({
    content,
    level,
    textAlign,
    font = 'heading',
    color = 'base',
}: HeadingProps) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: { __html: content },
        className: `max-w-5xl mx-auto my-auto ${getTextAlign(
            textAlign
        )} ${getFontSizeHeading(level)} ${getFont(font)} ${getFontColor(
            color
        )}`,
    })
    return tag
}
