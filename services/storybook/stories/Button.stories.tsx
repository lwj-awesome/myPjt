import React from "react";
import { Button, ButtonTypes, CommonTypes } from "@mypjt/components";
import { Meta, StoryObj } from "@storybook/react";
import {
  commonColor,
  commonLayoutMode,
  commonSize,
} from "../constant/commonVar";

const meta: Meta<ButtonTypes.ButtonProps> = {
  title: "Button",
  component: Button,
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
    text: "Button",
    color: "yellow",
    mode: "outline",
    size: "md",
  },
  argTypes: {
    text: {
      control: "text",
      description: "button 내부에 들어갈 text를 설정합니다.",
      type: "string",
    },
    mode: {
      control: "radio",
      options: commonLayoutMode,
      description:
        "button의 모양을 설정합니다 정해진 3가지 레이아웃을 따릅니다.",
      type: "CommonTypes.ThreeLayoutModeType",
    },
    size: {
      control: "radio",
      options: commonSize,
      description: "button의 크기를 설정합니다 정해진 크기를 따릅니다.",
      type: "CommonTypes.CommonSizeType",
    },
    color: {
      control: "select",
      options: commonColor,
      description: "button의 color를 설정합니다 정해진 color를 따릅니다.",
      type: "commonColor",
    },
    onClickButton: {
      description: "button의 클릭 이벤트입니다.",
    },
  },
};

export default meta;

type Story = StoryObj<ButtonTypes.ButtonProps>;

export const docs: Story = {};
