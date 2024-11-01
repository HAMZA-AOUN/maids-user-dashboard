import Image from "next/image";
import Link from "next/link";
import React from "react";

interface User {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}
interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Link
      href={`/user/${user.id}`}
      className="flex w-full md:w-[450px] hover:scale-105 transition-all duration-500 px-4 py-2 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-gray-100 items-center justify-between gap-2 "
    >
      {/* IMAGE */}
      <div className="w-1/3 items-center justify-center  ">
        <Image
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          width={100}
          height={100}
          className="object-contain rounded-full p-1 w-[100px] h-[100px] ring-1 ring-blue-500 "
        />
      </div>

      {/* INFO */}
      <div className="flex flex-col w-2/3  gap-2 text-gray-700 font-semibold">
        <h2>
          {" "}
          <span className="text-blue-600 ">name : </span>
          {user.first_name} {user.last_name}
        </h2>
        <h4>
          {" "}
          <span className="text-blue-600 ">email : </span>
          {user.email}
        </h4>
      </div>
    </Link>
  );
};

export default UserCard;
