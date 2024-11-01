"use client";
import { fetchUsersThunk } from "@/store/userSlice";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import UserCard from "./UserCard";
import Pagination from "./Pagination";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { MainPageSkeleton } from "./skeletons/MainPageSkeleton";
import "@fontsource/righteous";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch: AppDispatch = useDispatch();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.user
  );
  useEffect(() => {
    const fetchUsers = async () => {
      await dispatch(fetchUsersThunk(`${currentPage}`));
    };
    fetchUsers();
  }, [dispatch, currentPage]);

  const onPageChange = useCallback((i: number) => {
    setCurrentPage(i);
  }, []);

  if (loading)
    return (
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        animate="show"
      >
        <MainPageSkeleton />;
      </motion.div>
    );
  if (error)
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
    <div className=" flex    pt-4  flex-col items-center justify-center mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64 mt-36">
      <motion.div
        variants={fadeIn("down", 0.7)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="flex font-righteous items-center justify-center text-3xl font-bold text-gray-600 pb-8 pt-2"
      >
        Our Users :
      </motion.div>
      <div className="flex flex-wrap items-center justify-center gap-8 w-full mb-5 ">
        {users.map((user, index) => (
          <motion.div
            variants={fadeIn(
              `${index % 2 === 0 ? "right" : "left"}`,
              index / 3 + 0.5
            )}
            initial="hidden"
            animate="show"
            exit="exit"
            key={user.id}
          >
            <UserCard user={user} />
          </motion.div>
        ))}
      </div>
      <Pagination currentPage={currentPage} onPageChange={onPageChange} />
    </div>
  );
};

export default Main;
