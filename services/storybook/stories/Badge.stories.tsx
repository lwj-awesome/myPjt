import React from "react";
import { Badge, BadgeTypes } from "@mypjt/components";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import {
  commonColor,
  commonLayoutMode,
  commonSize,
} from "../constant/commonVar";

const meta: Meta<BadgeTypes.BadgeProps> = {
  title: "Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        type: "code", // 소스 코드 표시를 설정
      },
    },
  },
  tags: ["autodocs"],
  args: {
    color: "green",
    text: "BADGE",
    mode: "solid",
  },
  argTypes: {
    color: {
      control: "select",
      options: commonColor,
      description: "Badge의 색상을 설정합니다. 정해진 ColorTypes를 사용합니다.",
      type: "CommonTypes.ColorType",
    },
    text: {
      control: "text",
      description: "Badge에 표시할 텍스트를 설정합니다.",
    },
    mode: {
      control: "radio",
      options: commonLayoutMode,
      description:
        "Badge의 테두리 모양을 설정합니다. 정해진 Layout을 사용합니다.",
      type: "CommonTypes.ThreeLayoutModeType",
    },
  },
};

export default meta;

type Story = StoryObj<BadgeTypes.BadgeProps>;

export const docs: Story = {};
