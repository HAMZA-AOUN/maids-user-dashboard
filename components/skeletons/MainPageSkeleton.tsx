export const CardSkeleton = () => {
  return (
    <div
      className="flex w-[450px] px-4 py-2 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-gray-200 items-center 
    justify-between gap-2 animate-pulse"
    >
      <div className="w-1/3 items-center justify-center">
        <div className="w-[100px] h-[100px] rounded-full shimmer" />
      </div>
      <div className="w-2/3 flex flex-col items-start justify-start gap-2">
        <div className="flex h-5 w-24 shimmer rounded-md" />
        <div className="flex h-7 w-52 shimmer rounded-md" />
      </div>
    </div>
  );
};

export const MainPageSkeleton = () => {
  return (
    <div className="flex pt-4 flex-col items-center justify-center mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64 mt-36">
      <div className="flex flex-wrap items-center justify-center gap-8 w-full mb-5">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
};
