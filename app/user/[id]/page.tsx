"use client";
import { fetchUserByIdThunk, clearUser } from "@/store/userSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import UserSkeleton from "@/components/skeletons/UserSkeleton";
import "@fontsource/righteous";

const UserPage = () => {
  const params = useParams();
  const userId = params.id as string;

  const dispatch: AppDispatch = useDispatch();
  const { user, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) await dispatch(fetchUserByIdThunk(userId));
    };
    fetchUser();
    return () => {
      dispatch(clearUser());
    };
  }, [dispatch, userId]);

  if (loading)
    return (
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        animate="show"
      >
        <UserSkeleton />;
      </motion.div>
    );
  if (error || user === null)
    return (
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        animate="show"
        className="min-h-screen flex items-center justify-center text-2xl lg:text-4xl font-bold text-red-600 mx-auto"
      >
        Error:{" "}
        {typeof error === "string"
          ? error
          : error?.message || "An unexpected error occurred."}
      </motion.div>
    );
  return (
    <div className=" flex flex-col md:flex-row w-full items-center justify-between gap-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-32">
      <motion.div
        variants={fadeIn("right", 0.7)}
        initial="hidden"
        animate="show"
        className="flex w-full md:w-1/3 items-center overflow-hidden justify-center shadow-xl rounded-3xl bg-blue-200 "
      >
        <Image
          src={user ? user?.avatar : "/avatar.png"}
          alt={`${user?.first_name} ${user?.last_name}`}
          width={100}
          height={100}
          className=" w-full rounded-3xl  object-cover p-1 "
        />
      </motion.div>
      <div className="flex flex-col  items-start justify-center  gap-4 w-full md:w-2/3">
        <motion.h1
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          animate="show"
          className="text-3xl font-righteous font-bold text-blue-500"
        >
          {user?.first_name} {user?.last_name}
        </motion.h1>

        <motion.p
          variants={fadeIn("left", 0.9)}
          initial="hidden"
          animate="show"
          className="text-xl font-semibold text-gray-600"
        >
          {" "}
          <span className="font-bold text-blue-500">Email : </span>
          {user?.email}
        </motion.p>
        <motion.p
          variants={fadeIn("left", 1)}
          initial="hidden"
          animate="show"
          className="text-lg font-semibold text-gray-700"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          quibusdam error laborum cupiditate placeat deserunt, voluptatem
          reprehenderit quae excepturi aspernatur ipsam nam velit tempore
          molestias facere magni ratione ipsa quos?
        </motion.p>
      </div>
    </div>
  );
};

export default UserPage;
