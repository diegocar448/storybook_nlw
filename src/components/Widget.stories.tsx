// Meta é o que vai definir como tipagem esse primeiro objeto aqui dentro #linha 6-7
import { Meta, StoryObj } from '@storybook/react';
import { Widget } from './Widget';

export default {
    title: 'Widget',
    component: Widget,
} as Meta

export const Default: StoryObj = {
    
}