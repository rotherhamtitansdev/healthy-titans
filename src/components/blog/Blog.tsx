import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AppHeader from "../app_header/AppHeader";
import MenuHeader from "../app_header/header/MenuHeader";
import { BlogArticle, blogArticles } from "../../data/BlogArticles";
import { fetchBlogArticles } from "../../api/FirebaseAPI";

const Blog = () => {
  const [articles, setArticles] = useState<BlogArticle[]>(blogArticles);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    fetchBlogArticles()
      .then((firebaseArticles) => {
        if (firebaseArticles.length > 0) {
          setArticles(firebaseArticles);
        }
      })
      .catch(() => undefined);
  }, []);

  const featuredPost = useMemo(
    () => articles.find((post) => post.featured) || articles[0],
    [articles]
  );
  const filterOptions = useMemo(
    () => ["All", ...Array.from(new Set(articles.map((post) => post.category).filter(Boolean)))],
    [articles]
  );
  const filteredPosts = useMemo(
    () =>
      selectedFilter === "All"
        ? articles
        : articles.filter((post) => post.category === selectedFilter),
    [articles, selectedFilter]
  );
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  const paginatedPosts = useMemo(
    () => filteredPosts.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [filteredPosts, currentPage]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter]);

  return (
    <>
      <AppHeader>
        <MenuHeader
          title="Blog"
          body="News, tips and stories from the Cookie's KHAW team to support healthier habits at home, school and in the community."
        />
      </AppHeader>

      <div className="px-6 md:px-10 pb-20">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
            <h2 className="text-titansDarkBlue font-semibold text-2xl md:text-3xl mb-3">
              Pick a topic, build a healthy habit
            </h2>
            <p className="text-homepageHeaderText text-sm md:text-base font-medium">
              These posts are short, practical and made for real school-week schedules.
            </p>
          </div>

          <Link
            to={`/Blog/${featuredPost.id}`}
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 bg-white rounded-3xl shadow-lg p-6 md:p-8 transition duration-300 hover:-translate-y-0.5"
          >
            <div className="rounded-2xl overflow-hidden bg-slate-100">
              <img
                src={featuredPost.heroImage}
                alt={featuredPost.title}
                className="w-full h-56 md:h-72 object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/blog-card-fallback/1200/800";
                }}
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="inline-block rounded-full bg-[#FCE8EE] text-[#A33152] px-3 py-1 text-xs font-semibold mb-3 w-fit">
                Featured
              </span>
              <h3 className="text-titansDarkBlue font-semibold text-2xl md:text-3xl mb-3">
                {featuredPost.title}
              </h3>
              <p className="text-homepageHeaderText text-base md:text-lg font-medium">
                {featuredPost.summary}
              </p>
              <p className="text-homepageHeaderText text-sm md:text-base font-medium mt-4">
                {featuredPost.category} • {featuredPost.readTime}
              </p>
            </div>
          </Link>

          <div className="bg-white rounded-3xl shadow-lg p-4 md:p-5">
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-2 text-sm font-semibold rounded-full transition ${
                    selectedFilter === filter
                      ? "bg-[#D14267] text-white"
                      : "bg-slate-100 text-titansDarkBlue"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {paginatedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/Blog/${post.id}`}
                className="bg-white rounded-3xl shadow-lg p-6 md:p-8 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] h-full flex flex-col"
              >
                <div className="w-full h-44 rounded-2xl overflow-hidden bg-slate-100 mb-4">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://picsum.photos/seed/blog-card-fallback/1200/800";
                    }}
                  />
                </div>
                <span className="inline-block rounded-full bg-[#EAF5FF] text-[#2464A5] px-3 py-1 text-xs font-semibold mb-3">
                  {post.category}
                </span>
                <h2 className="text-titansDarkBlue font-semibold text-2xl mb-3">{post.title}</h2>
                <p className="text-homepageHeaderText text-sm md:text-base font-medium mb-2">
                  {post.readTime}
                </p>
                <p className="text-homepageHeaderText text-base md:text-lg font-medium">
                  {post.summary}
                </p>
                <p className="text-[#D14267] font-semibold text-sm mt-4">Read article</p>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-2">
              <button
                type="button"
                className="px-3 py-2 rounded-full bg-white shadow text-sm font-semibold disabled:opacity-40"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    type="button"
                    className={`px-3 py-2 rounded-full text-sm font-semibold ${
                      currentPage === page
                        ? "bg-[#D14267] text-white"
                        : "bg-white shadow text-titansDarkBlue"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                );
              })}
              <button
                type="button"
                className="px-3 py-2 rounded-full bg-white shadow text-sm font-semibold disabled:opacity-40"
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
