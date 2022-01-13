import React from 'react';
import { Spin } from 'antd';
import './progress.css';

function Progress(): React.ReactElement {
  return (
    <div className="loading_color_wrap">
      <div className="loading_boll loading_ball_1" />
      <div className="loading_boll loading_ball_2" />
      <div className="loading_boll loading_ball_3" />
      <div className="loading_boll loading_ball_4" />
      <p className="message">로딩 중입니다.</p>
    </div>
  );
}

export default Progress;

type LoadingProps = {
  text?: string;
};

export function Loading({ text }: LoadingProps): React.ReactElement {
  return <Spin tip={text} />;
}

Loading.defaultProps = {
  text: 'Loading...',
};
