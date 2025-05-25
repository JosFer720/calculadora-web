// calculadora/stories/Display.stories.jsx
import Display from '../components/Display';

export default {
  title: 'Components/Display',
  component: Display,
};

const Template = (args) => <Display {...args} />;

export const Zero = Template.bind({});
Zero.args = {
  value: '0',
};

export const LongNumber = Template.bind({});
LongNumber.args = {
  value: '123456789',
};
