import { CreateAccount } from ".";

export default {
  title: "Components/CreateAccount",
  component: CreateAccount,
  argTypes: {
    tipo: {
      options: ["outline", "field"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    tipo: "outline",
    className: {},
    divClassName: {},
  },
};
