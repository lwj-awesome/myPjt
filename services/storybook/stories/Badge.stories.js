import { Tag } from "@mypjt/components";
export default {
  title: "Badge",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
export const Primary = {};
