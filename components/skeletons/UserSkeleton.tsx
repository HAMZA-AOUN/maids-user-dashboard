const UserSkeleton = () => {
  return (
    <div
      className="flex flex-col md:flex-row w-full items-center md:items-center justify-between 
    gap-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-32 animate-pulse"
    >
      <div className="w-full md:w-1/3 items-start justify-center">
        <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full shimmer" />
      </div>

      <div className="w-full md:w-2/3 flex flex-col gap-2 items-start justify-center">
        <div className="h-6 w-10 md:w-20 shimmer rounded-md" />
        <div className="h-10 w-24 md:w-36 shimmer rounded-md" />
        <div className="h-36 w-56 md:w-96 shimmer rounded-md" />
      </div>
    </div>
  );
};

export default UserSkeleton;
