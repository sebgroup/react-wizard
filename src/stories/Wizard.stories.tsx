import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Wizard, { WizardProps } from '../Wizard';
import WizardHeader from '../WizardHeader';
import WizardSteps from '../WizardSteps';
import * as WizardStepsStories from './WizardSteps.stories';

export default {
  title: 'components/Wizard',
  component: Wizard,
  subcomponents: {
    WizardHeader,
    WizardSteps,
  },
  argTypes: {},
  decorators: [
    (Story) => <MemoryRouter initialEntries={['/']}>{Story()}</MemoryRouter>,
  ],
} as Meta;

const Template: Story<WizardProps> = ({ ref, ...args }) => {
  const [strict, setStrict] = React.useState<boolean>(args.strict);
  const [toggle, setToggle] = React.useState<boolean>(args.toggle);

  React.useEffect(() => {
    setStrict(args.strict);
  }, [args.strict]);

  React.useEffect(() => {
    setToggle(args.toggle);
  }, [args.toggle]);

  return (
    <>
      <div className="w-100 text-center">
        <button className="btn" onClick={() => setToggle(true)}>
          Show Wizard
        </button>
      </div>
      <Wizard {...args} strict={strict} toggle={toggle}>
        <WizardHeader
          heading="Wizard Title"
          actions={[
            <button className="btn" onClick={() => setToggle(false)}>
              X
            </button>,
          ]}
        />
        <WizardSteps
          navigationDescription="Step {activeStep} of {totalSteps}"
          steps={[
            ...WizardStepsStories.Default.args.steps,
            ...WizardStepsStories.WithSecondaryContent.args.steps,
            ...WizardStepsStories.WithCustomControls.args.steps,
          ]}
        />
      </Wizard>
    </>
  );
};

export const Default: Story<WizardProps> = Template.bind({});
Default.args = {
  toggle: false,
  strict: true,
  onDismissed: action('dismissed'),
};
