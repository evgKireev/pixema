import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const Skeleton = (props: JSX.IntrinsicAttributes & IContentLoaderProps) => (
  <ContentLoader
    rtl
    speed={2}
    width={280}
    height={450}
    viewBox="0 0 280 450"
    backgroundColor="#e3dede"
    foregroundColor="#917aff"
    {...props}
  >
    <rect x="5" y="20" rx="20" ry="20" width="266" height="357" />
    <rect x="8" y="397" rx="20" ry="20" width="266" height="51" />
  </ContentLoader>
);

export default Skeleton;
