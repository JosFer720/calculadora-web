// calculadora/stories/Button.stories.jsx
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '7',
  onClick: (label) => alert(`Pressed ${label}`),
};

export const Operator = Template.bind({});
Operator.args = {
  label: '+',
  onClick: (label) => alert(`Pressed ${label}`),
};
