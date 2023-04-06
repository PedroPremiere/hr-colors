import { Meta, StoryObj } from "@storybook/react";
import Index from "./index";

const meta: Meta<typeof Index> = {
  title: "Components/Molecules/Menus/FilterByColorMenu",
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
