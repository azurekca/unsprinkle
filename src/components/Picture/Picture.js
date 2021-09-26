const Picture = ({ sources = [], src, alt, ...delegated }) => {
  return (
    <picture>
      {sources.map((source, idx) => (
        <source key={idx} type={source.type} srcSet={source.srcset} />
      ))}
      <img src={src} alt={alt} {...delegated} />
    </picture>
  );
};

export default Picture;
