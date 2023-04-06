import { Meta, StoryObj } from "@storybook/react";

import Filter from "./index";

const meta: Meta<typeof Filter> = {
  title: "Components/Atoms/Filters/RGBFilter",
  component: Filter,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Filter>;

export const Primary: Story = {
  render: () => <Filter />,
};
