import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BreadCrumbs } from './BreadCrumbs';

export default {
  title: 'BreadCrumbs',
  component: BreadCrumbs,
} as ComponentMeta<typeof BreadCrumbs>;

const Template: ComponentStory<typeof BreadCrumbs> = (args) => <BreadCrumbs {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  steps: [true, false, true, null, null, null, null],
  currentStep: 3
};

Primary.argTypes = {
  steps: {
    description: 'List of values shown whether step was succeeded or not',
  },
  currentStep: {
    type: { name: 'number', required: true },
    description: 'Shows what step user currently at',
    control: {
      type: 'number'
    }
  }
};
