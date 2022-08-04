import React from 'react'
import Text from './component'

export default {
    title: 'svg-text',
    component: Text,
    args: {
        variant: 'title',
        text: 'test',
        fontSize: 12,
        color: null
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
        color: {
            description: 'Set the color of the text',
            control: 'color'
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