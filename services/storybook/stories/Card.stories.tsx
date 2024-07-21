import React from "react";
import { Card, CardTypes } from "@mypjt/components";
import { Meta, StoryObj } from "@storybook/react";

const cardModeVar: CardTypes.CardModeType[] = ["elevated", "filled", "outline"];
const meta: Meta<CardTypes.CardProps> = {
  title: "Date Display/Card",
  component: Card,
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
    mode: "elevated",
    height: 100,
    width: 100,
  },
  argTypes: {
    mode: {
      control: "radio",
      options: cardModeVar,
      description: "Card의 모양을 설정합니다 정해진 3가지 레이아웃을 따릅니다.",
      type: "CardTypes.CardModeType",
    },
    height: {
      description: "Card의 높이를 설정합니다. optional, 기본값은 120입니다",
      type: "number",
    },
    width: {
      description: "Card의 너비를 설정합니다. optional, 기본값은 120입니다",
      type: "number",
    },
  },
};

export default meta;

type Story = StoryObj<CardTypes.CardProps>;
export const docs: Story = {};

export const CardExample = () => {
  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card mode="filled">
        <div>Card!!</div>
      </Card>
    </div>
  );
};
