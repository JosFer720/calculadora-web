// calculadora/stories/Keypad.stories.jsx
import Keypad from '../components/Keypad';

export default {
  title: 'Components/Keypad',
  component: Keypad,
};

const Template = (args) => <Keypad {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: (label) => console.log(`Pressed ${label}`),
};
