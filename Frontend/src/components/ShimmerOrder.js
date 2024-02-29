const ShimmerOrder = () => (
  <div>
    <div className=" ml-[210px] w-[1080px] h-[60px] my-[60px]  bg-gray-200"></div>
    <div
      className="flex flex-wrap justify-between gap-[30px]  px-[210px] pt-[20px]"
      key="shimmer"
    >
      {Array(10)
        .fill("")
        .map((e) => (
          <div className="w-[280px] h-[191px] bg-gray-200"></div>
        ))}
    </div>
  </div>
);
export default ShimmerOrder;
