import React from "react";
import { Tooltip, Button, ButtonProps } from "antd";
import tw from "twin.macro";
import styled from "styled-components";
import {
  DeleteFilled,
  DeleteOutlined,
  EditFilled,
  EditOutlined,
  MoreOutlined,
  PlusCircleFilled,
  PlusOutlined,
  SaveFilled,
  SearchOutlined,
  SyncOutlined,
} from "@ant-design/icons";

const CreateStyledButton = styled(Button)`
  ${tw`bg-blue-500 text-white`}
  &:hover, &:focus {
    ${tw`bg-blue-600 text-white`}
  }
`;

const UpdateStyledButton = styled(Button)`
  ${tw`bg-green-500 text-white`}
  &:hover, &:focus {
    ${tw`bg-green-600 text-white`}
  }
`;

const RemoveStyledButton = styled(Button)`
  ${tw`bg-red-500 text-white`}
  &:hover, &:focus {
    ${tw`bg-red-600 text-white`}
  }
`;

const RefreshStyledButton = styled(Button)`
  ${tw`bg-yellow-500 text-white`}
  &:hover, &:focus {
    ${tw`bg-yellow-600 text-white`}
  }
`;

export function SearchButton({
  children,
  ...other
}: ButtonProps): React.ReactElement {
  return (
    <Button
      icon={<SearchOutlined />}
      htmlType="submit"
      style={{ minWidth: 80 }}
      type="primary"
      {...other}
    >
      {children || "검색"}
    </Button>
  );
}

export function DownloadButton({
  children,
  ...other
}: ButtonProps): React.ReactElement {
  return (
    <Button
      icon={<SaveFilled />}
      style={{ minWidth: 80 }}
      type="primary"
      aria-label="다운로드"
      {...other}
    >
      {children || "다운로드"}
    </Button>
  );
}

export function CreateButton({
  children,
  ...other
}: ButtonProps): React.ReactElement {
  return (
    <Button
      icon={<PlusCircleFilled />}
      type="text"
      className="text-blue-500 px-2"
      {...other}
    >
      {children || "추가"}
    </Button>
  );
}

export function UpdateButton({
  children,
  ...other
}: ButtonProps): React.ReactElement {
  return (
    <Button
      icon={<EditFilled />}
      type="text"
      className="text-green-500 px-2"
      {...other}
    >
      {children || "수정"}
    </Button>
  );
}

export function DeleteButton({
  children,
  ...other
}: ButtonProps): React.ReactElement {
  return (
    <Button
      icon={<DeleteFilled />}
      type="text"
      className="text-red-500 px-2"
      {...other}
    >
      {children || "삭제"}
    </Button>
  );
}

export function AddCircleButton({
  children,
  ...other
}: ButtonProps): React.ReactElement {
  return (
    <Tooltip title={children || "추가"}>
      <CreateStyledButton
        shape="circle"
        size="small"
        icon={<PlusOutlined />}
        {...other}
      />
    </Tooltip>
  );
}

export function RemoveCircleButton({
  children,
  ...other
}: ButtonProps): React.ReactElement {
  return (
    <Tooltip title={children || "삭제"}>
      <RemoveStyledButton
        shape="circle"
        size="small"
        icon={<DeleteOutlined />}
        {...other}
      />
    </Tooltip>
  );
}

export function UpdateCircleButton({
  children,
  ...other
}: ButtonProps): React.ReactElement {
  return (
    <Tooltip title={children || "수정"}>
      <UpdateStyledButton
        shape="circle"
        size="small"
        icon={<EditOutlined />}
        {...other}
      />
    </Tooltip>
  );
}

export function RefreshCircleButton({
  children,
  ...other
}: ButtonProps): React.ReactElement {
  return (
    <Tooltip title={children || "새로고침"}>
      <RefreshStyledButton
        shape="circle"
        size="small"
        icon={<SyncOutlined />}
        {...other}
      />
    </Tooltip>
  );
}

export function MoreButton({
  children,
  ...other
}: ButtonProps): React.ReactElement {
  return (
    <Tooltip title={children || "더보기"}>
      <Button type="text" icon={<MoreOutlined />} {...other} />
    </Tooltip>
  );
}
