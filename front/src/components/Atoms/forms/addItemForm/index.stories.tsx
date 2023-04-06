import { Meta, StoryObj } from "@storybook/react";
import AddItemForm from "./index";

const meta: Meta<typeof AddItemForm> = {
  title: "Components/Atoms/Forms/AddItemForm",
  component: AddItemForm,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof AddItemForm>;

export const Primary: Story = {
  render: () => <AddItemForm />,
};
