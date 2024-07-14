import React from "react";
import { BreadCrumb, BreadCrumbTypes } from "@mypjt/components";
import { Meta, StoryObj } from "@storybook/react";

const breadCrumbData = ["빵1", "빵2", "빵3", "빵4", "빵5"];
const separatorVars: BreadCrumbTypes.SeparatorType[] = [
  "BsArrowRight",
  "BsChevronRight",
  "BsDash",
];
const meta: Meta<BreadCrumbTypes.BreadCrumbProps> = {
  title: "BreadCrumb",
  component: BreadCrumb,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        type: "code",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    data: breadCrumbData,
    separator: "BsArrowRight",
  },
  argTypes: {
    data: {
      control: "object",
      description: "breadCrumbData입니다. string 배열로 받습니다.",
      type: "string[]",
    },
    separator: {
      control: "radio",
      options: separatorVars,
      description:
        "breadCrumb의 세퍼레이터를 설정합니다. 정해진 세퍼레이터를 사용합니다.",
      type: "BreadCrumbTypes.SeparatorType",
    },
  },
};

export default meta;

type Story = StoryObj<BreadCrumbTypes.BreadCrumbProps>;

export const docs: Story = {};
