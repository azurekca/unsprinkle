import React from "react";
import styled from "styled-components/macro";
import Picture from "../Picture";

function generateSources(src) {
  const TYPES = ["avif", "jpg"];
  const name = src.slice(0, src.lastIndexOf("."));
  return TYPES.map(type => {
    return {
      type: `image/${type}`,
      srcset: `${name}.${type} 1x,
               ${name}@2x.${type} 2x,
               ${name}@3x.${type} 3x`,
    };
  });
}

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image sources={generateSources(src)} src={src} alt={alt} />
      </Anchor>
      <Tags>
        {tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled(Picture)`
  border-radius: 2px;
  display: block;
  height: 300px;
  margin-bottom: 8px;
  object-fit: cover;
  width: 100%;
`;

const Tags = styled.ul`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Tag = styled.li`
  background: var(--color-gray-300);
  color: var(--color-gray-800);
  display: inline;
  font-size: 0.875rem;
  font-weight: 475;
  line-height: 2;
  margin-right: 8px;
  padding: 4px 8px;
  :last-of-type {
    margin-right: 0;
  }
`;

export default PhotoGridItem;
