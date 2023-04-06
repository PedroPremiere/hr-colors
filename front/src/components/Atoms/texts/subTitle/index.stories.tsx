import { Meta, StoryObj } from "@storybook/react";

import SubTitle from "./index";

const meta: Meta<typeof SubTitle> = {
  title: "Components/Atoms/text/subTitle/SubTitle",
  component: SubTitle,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof SubTitle>;

export const Primary: Story = {
  render: () => <SubTitle />,
};
