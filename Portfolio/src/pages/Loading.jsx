const Example = () => {
  return (
    <div>
      <CutoutTextLoader
        height="100vh"
        background="white"
        // NOTE: Using GIFs for the background looks super cool :)
        imgUrl="https://media2.giphy.com/media/k7Uvq149PSOPqYCkVN/giphy.gif?cid=6c09b95254hxkcpipe4b2ekyq7esptnau5nsrnu3rh93l6lo&ep=v1_gifs_search&rid=giphy.gif&ct=g"
      />
    </div>
  );
};

const CutoutTextLoader = ({
  height,
  background,
  imgUrl,
}) => {
  return (
    <div className="relative" style={{ height }}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 animate-pulse z-10"
      />
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(3rem, 12vw, 10rem)",
          lineHeight: height,
        }}
      >
        Loading...
      </span>
    </div>
  );
};

export default Example;