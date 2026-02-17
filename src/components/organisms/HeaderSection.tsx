// components/sections/HeaderSection.tsx
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";
import ReactMarkdown from "react-markdown";
import "./HeaderSection.css";

type Maybe<T> = T | undefined | null;

type AssetLike = {
  fields?: { file?: { url?: string; contentType?: string }; title?: string };
  url?: string;
  title?: string;
  contentType?: string;
};

type HeaderContentEntry = {
  sys: {
    id: string;
    contentType?: { sys: { id: string } };
  };
  fields: {
    pageslug?: string;
    headerTitle?: Document;
    subTitle?: string; // markdown: __bold__
    description?: string;
    media?: AssetLike; // optional
  };
};

// Try to get a usable URL from either resolved Asset or a bare object
function resolveAssetUrl(asset?: AssetLike): string | undefined {
  if (!asset) return undefined;

  // Handle unresolved Contentful Link object
  if (
    (asset as any).sys?.type === "Link" &&
    (asset as any).sys?.linkType === "Asset"
  ) {
    return undefined;
  }

  // resolved SDK asset
  const sdkUrl = asset.fields?.file?.url;
  if (sdkUrl) return sdkUrl.startsWith("//") ? `https:${sdkUrl}` : sdkUrl;

  // GraphQL / already-normalized
  if (asset.url)
    return asset.url.startsWith("//") ? `https:${asset.url}` : asset.url;

  return undefined;
}

// Try to get the content type (MIME) from the asset
function resolveAssetContentType(asset?: AssetLike): string | undefined {
  if (!asset) return undefined;
  // resolved SDK asset
  const sdkType = asset.fields?.file?.contentType;
  if (sdkType) return sdkType;
  // GraphQL / already-normalized
  if (asset.contentType) return asset.contentType;
  return undefined;
}

export default function HeaderSection({
  entry,
}: {
  entry: HeaderContentEntry;
}) {
  const { headerTitle, subTitle, description, media } = entry.fields || {};
  const mediaUrl = resolveAssetUrl(media);
  const mediaType = resolveAssetContentType(media);
  const isVideo = mediaType
    ? mediaType.startsWith("video")
    : mediaUrl
      ? /\.(mp4|webm|ogg)$/i.test(mediaUrl)
      : false;

  return (
    <section
      className="headerSection"
      aria-labelledby={`header-${entry.sys.id}`}
    >
      <div className="headerSection__inner">
        <div className="headerSection__left">
          {/* Title (Rich Text). We render each H2 on its own line. */}
          {headerTitle && (
            <div id={`header-${entry.sys.id}`} className="headerSection__title">
              {documentToReactComponents(headerTitle, {
                renderNode: {
                  "heading-2": (node, children) => (
                    <h2 className="headerSection__h2">{children}</h2>
                  ),
                },
              })}
            </div>
          )}
          {/* Sub Title (Markdown) */}
          {subTitle && (
            <div className="headerSection__subtitle">
              <p>
                <span>{subTitle}</span>
              </p>
              {/* Description (plain text) */}
              {description && (
                <p className="headerSection__description">{description}</p>
              )}
            </div>
          )}
        </div>
        <div className="headerSection__right">
          {mediaUrl ? (
            <div className="headerSection__imageHex">
              {isVideo ? (
                <video
                  src={mediaUrl}
                  autoPlay
                  loop
                  muted
                  defaultMuted
                  playsInline
                  preload="auto"
                  className="headerSection__mediaVideo"
                  // title={media?.title || "Header video"}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              ) : (
                <img
                  src={mediaUrl}
                  alt={media?.title || "Header illustration"}
                  className="headerSection__mediaImage"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              )}
            </div>
          ) : (
            <div className="headerSection__imageHex headerSection__imageHex--placeholder" />
          )}
        </div>
      </div>
    </section>
  );
}
