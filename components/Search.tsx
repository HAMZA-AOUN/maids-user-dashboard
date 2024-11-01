"use client";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const router = useRouter();

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) {
        router.push(`/user/${e.target.value}`);
      }
    },
    700
  );
  return (
    <input
      type="text"
      className="w-full shadow-md py-2 px-4 rounded-3xl outline-none bg-gray-100 text-xs sm:text-lg  md:text-xl"
      placeholder="Search User by ID"
      onChange={handleSearch}
    />
  );
};

export default Search;
