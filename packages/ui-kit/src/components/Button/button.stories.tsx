import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonBasic = Template.bind({});

ButtonBasic.args = {
  children: 'Some button'
};

ButtonBasic.argTypes = {
  handleClick: { action: 'handleClick' },
}