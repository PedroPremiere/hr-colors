import { Meta, StoryObj } from "@storybook/react";

import ComboBox from "./index";

const meta: Meta<typeof ComboBox> = {
  title: "Components/Atoms/ComboBoxes/ComboBox",
  component: ComboBox,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof ComboBox>;

export const Primary: Story = {
  render: () => <ComboBox />,
};
