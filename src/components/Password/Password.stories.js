import { Password } from ".";

export default {
  title: "Components/Password",
  component: Password,
  argTypes: {
    tipo: {
      options: ["sin-clave", "con-clave"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    tipo: "sin-clave",
    className: {},
    divClassName: {},
  },
};
