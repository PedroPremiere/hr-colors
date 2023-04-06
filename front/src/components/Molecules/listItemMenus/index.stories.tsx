import { Meta, StoryObj } from "@storybook/react";
import Index from "./index";

const meta: Meta<typeof Index> = {
  title: "Components/Molecules/ListItemMenus/ListItemMenu",
  component: Index,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Index>;

export const Primary: Story = {
  render: () => <Index />,
};
