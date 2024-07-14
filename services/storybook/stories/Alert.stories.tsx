import React from "react";
import { Alert, AlertTypes, Badge } from "@mypjt/components";
import { Meta, StoryObj } from "@storybook/react";

const alertShapeVar: AlertTypes.AlertShapeType[] = [
  "left-accent",
  "subtitle",
  "top-accent",
];
const alertTypeVar: AlertTypes.AlertType[] = [
  "fail",
  "info",
  "success",
  "warnning",
];

const meta: Meta<AlertTypes.AlertProps> = {
  title: "Alert",
  component: Alert,
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
    shape: "left-accent",
    alert: "success",
    title: "Alert",
    content: "알럿입니다!",
  },
  argTypes: {
    shape: {
      control: "radio",
      options: alertShapeVar,
      description: "Alert의 Shape를 설정합니다. 정해진 shape을 따릅니다.",
      type: "AlertTypes.AlertShapeType",
    },
    alert: {
      control: "select",
      options: alertTypeVar,
      description: "Alert의 종류입니다. 정해진 4가지 종류를 사용합니다.",
      type: "AlertTypes.AlertType",
    },
    title: {
      control: "text",
      description: "Alert의 제목입니다.",
      type: "string",
    },
    content: {
      control: "text",
      description: "Alert 내의 컨텐트입니다.",
      type: "string",
    },
  },
};

export default meta;

type Story = StoryObj<AlertTypes.AlertProps>;

export const docs: Story = {};

export const success = () => (
  <Alert
    title="success"
    shape="left-accent"
    alert="success"
    content="left-accent, success"
  />
);
export const warnning = () => (
  <Alert
    title="warnning"
    shape="subtitle"
    alert="warnning"
    content="subtitle, warnning"
  />
);
export const info = () => (
  <Alert
    title="info"
    shape="top-accent"
    alert="info"
    content="top-accent, info"
  />
);
export const fail = () => (
  <Alert
    title="fail"
    shape="top-accent"
    alert="fail"
    content="top-accent, fail"
  />
);
