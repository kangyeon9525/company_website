import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const Forum = () => {
  const dummyPosts = [
    {
      _id: 1,
      number: 1,
      title: "첫 번째 게시물",
      views: 120,
      fileUrl: ["file1"],
      createdAt: "2023-01-01",
    },
    {
      _id: 2,
      number: 2,
      title: "두 번째 게시물",
      views: 95,
      fileUrl: [],
      createdAt: "2023-01-05",
    },
    {
      _id: 3,
      number: 3,
      title: "세 번째 게시물",
      views: 70,
      fileUrl: ["file2", "file3"],
      createdAt: "2023-01-10",
    },
    {
      _id: 4,
      number: 4,
      title: "네 번째 게시물",
      views: 50,
      fileUrl: [],
      createdAt: "2023-01-15",
    },
    {
      _id: 5,
      number: 5,
      title: "다섯 번째 게시물",
      views: 30,
      fileUrl: ["file4"],
      createdAt: "2023-01-20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Motion.div
      className="bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-28 lg:py-0 max-w-6xl">
        <div className="text-center mb-6">
          <Motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900"
            variants={itemVariants}
          >
            업무 게시판
          </Motion.h2>
        </div>
        <Motion.div className="flex justify-end mb-4" variants={itemVariants}>
          <Link
            to="/board"
            className="px-5 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 border border-gray-200"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            전체보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </Motion.div>
        <Motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          variants={containerVariants}
        >
          {dummyPosts.length === 0 ? (
            <Motion.div
              className="p-6 text-center text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              최근 게시물이 없습니다.
            </Motion.div>
          ) : (
            dummyPosts.map((post) => (
              <Motion.div
                key={post._id}
                className="border-b border-gray-100 last:border-b-0 hover:bg-blue-50 transition-colors duration-300"
                variants={itemVariants}
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-gray-500 text-sm">
                        No. {post.number}
                      </span>
                      <span className="text-gray-500 text-sm">
                        조회수: {post.views}
                      </span>
                      {post.fileUrl.length > 0 && (
                        <span className="text-gray-500 text-sm">
                          파일: {post.fileUrl.length}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <div className="mt-2 text-gray-500">{post.createdAt}</div>
                  </div>
                  <div className="ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Motion.div>
            ))
          )}
        </Motion.div>
      </div>
    </Motion.div>
  );
};

export default Forum;
