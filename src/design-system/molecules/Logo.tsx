import { useEffect, useState } from 'react';
import { fetchLogoUrlByAssetId } from '../../contentful/mockClient';
import logo from './../../assets/corcept-logo.svg';

const ASSET_ID = import.meta.env.VITE_CONTENTFUL_LOGO_ASSET_ID as string;

export default function Logo({ className }: { className?: string }) {
  // const [url, setUrl] = useState<string>();
  // const [error, setError] = useState<string>();

  // useEffect(() => {
  //   let active = true;
  //   fetchLogoUrlByAssetId(ASSET_ID)
  //     .then((u) => active && setUrl(u))
  //     .catch((e) => active && setError(String(e)));
  //   return () => {
  //     active = false;
  //   };
  // }, []);

  // if (error) {
  //   console.error('Failed to load logo:', error);
  //   return null; // or render a fallback
  // }
  // if (!url) return null; // or a skeleton

//   return (
//     <span className="logo avia-svg-logo" style={{height: "100px"}}><a href="https://corcept.com/" className="av-contains-svg" aria-label="COR-logo" title="COR-logo" style={{margin: "30px", height: "100px"}}>
//     <img src={url} alt="Company Logo" className={className ?? ' h-16, h-20'} /></a></span>
//   )
  return (
    <a href="/" className="font-semibold tracking-wide">
      <img src={logo} alt="Company Logo" className={className ?? ' h-16, h-20'} />
    </a>
  );
}