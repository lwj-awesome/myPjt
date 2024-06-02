import { fn } from '@storybook/test';
import {components} from '@mypjt/components'
export default {
  title: 'Badge',
  component: components.Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};


