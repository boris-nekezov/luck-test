import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Form } from './Form';

import { Primary } from '../Input/Input.stories';
import { ButtonBasic } from '../Button/button.stories';

export default {
  title: 'Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => (
  <Form {...args}>
    <Primary {...Primary.args} />
    <Primary {...Primary.args} />
    <ButtonBasic {...ButtonBasic.args} />
  </Form>
);

export const FormBasic = Template.bind({});