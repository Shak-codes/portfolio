import React from 'react'
import Text from './component'

export default {
    title: 'svg-text',
    component: Text,
    args: {
        variant: 'title',
        text: 'test',
        fontSize: 12,
        fill: false,
        fillColor: null,
        stroke: false,
        strokeColor: null,
        strokeWidth: 1
    },
    argTypes: {
        variant: {
            description: 'Set the variant of the text',
            control: {
                type: 'select',
                options: ['title', 'header', 'paragraph'],
            },
            defaultValue: 'paragraph'
        },
        text: {
            description: 'Set the string to be rendered',
            defaultValue: 'test'
        },
        fontSize: {
            description: 'Set the size of the font',
            control: {
                type: 'number',
                min: 8,
                max: 100,
                step: 1,
            },
            defaultValue: 12
        },
        fill: {
            description: 'Determine if text should be filled'
        },
        fillColor: {
            description: 'Set the color of the fill',
            control: 'color'
        },
        stroke: {
            description: 'Determine if text should be stroked'
        },
        strokeColor: {
            description: 'Set the color of the stroke',
            control: 'color'
        },
        strokeWidth: {
            description: 'Set the width of the stroke',
            control: {
                type: 'number',
                min: 1,
                max: 3,
                step: 1,
            },
            defaultValue: 1
        }
    },

    parameters: {
        docs: {
            description: {
                component: 'Use this component for text SVGs'
            }
        }
    }
}

export const TextComponent = (args) => <Text {...args} />