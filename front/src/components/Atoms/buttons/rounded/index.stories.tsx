import { Meta, StoryObj } from "@storybook/react";

import RoundedButton from "./index";

const meta: Meta<typeof RoundedButton> = {
  title: "Components/Atoms/buttons/rounded/RoundedButton",
  component: RoundedButton,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof RoundedButton>;

export const Primary: Story = {
  render: () => <RoundedButton />,
};
