import { BotonRecuerdame } from ".";

export default {
  title: "Components/BotonRecuerdame",
  component: BotonRecuerdame,
  argTypes: {
    tipo: {
      options: ["activado", "desactivado"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    tipo: "activado",
    className: {},
    divClassName: {},
  },
};
