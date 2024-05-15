import { ContinueWithGoogle } from ".";

export default {
  title: "Components/ContinueWithGoogle",
  component: ContinueWithGoogle,
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
    frameFrameClassName: {},
    frameDivClassName: {},
    frameIconoGoogleIconoGoogle: "/img/icono-google.png",
  },
};
