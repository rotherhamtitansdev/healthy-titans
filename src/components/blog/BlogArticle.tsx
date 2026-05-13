import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AppHeader from "../app_header/AppHeader";
import MenuHeader from "../app_header/header/MenuHeader";
import VideoPlayer from "../videos/VideoPlayer";
import { BlogArticle as BlogArticleType, blogArticles } from "../../data/BlogArticles";
import { fetchBlogArticles } from "../../api/FirebaseAPI";
import trackAnalyticsEvent from "../../config/analytics";

const BlogArticle = () => {
  const { articleId } = useParams();
  const [articles, setArticles] = useState<BlogArticleType[]>(blogArticles);

  useEffect(() => {
    fetchBlogArticles()
      .then((firebaseArticles) => {
        if (firebaseArticles.length > 0) {
          setArticles(firebaseArticles);
        }
      })
      .catch(() => undefined);
  }, []);

  const article = articles.find((item) => item.id === articleId);
  const relatedPosts = useMemo(
    () => articles.filter((item) => item.id !== articleId).slice(0, 3),
    [articles, articleId]
  );

  useEffect(() => {
    if (!article) return;

    trackAnalyticsEvent("blog_article_opened", {
      article_id: article.id,
      article_title: article.title,
      article_category: article.category,
    });
  }, [article]);

  if (!article) {
    return (
      <>
        <AppHeader>
          <MenuHeader title="Blog" body="Article not found." />
        </AppHeader>
        <div className="px-6 md:px-10 pb-20">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-10">
            <Link className="text-[#D14267] font-semibold" to="/Blog">
              Back to blog topics
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <AppHeader>
        <MenuHeader title={article.title} body={article.summary} />
      </AppHeader>
      <div className="px-6 md:px-10 pb-20">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-block rounded-full bg-[#EAF5FF] text-[#2464A5] px-3 py-1 text-xs font-semibold">
                {article.category}
              </span>
              <span className="inline-block rounded-full bg-slate-100 text-homepageHeaderText px-3 py-1 text-xs font-semibold">
                {article.readTime}
              </span>
              <span className="inline-block rounded-full bg-slate-100 text-homepageHeaderText px-3 py-1 text-xs font-semibold">
                {article.publishedAt}
              </span>
            </div>
            <div className="w-full rounded-2xl overflow-hidden bg-slate-100 mb-6">
              <img
                src={article.heroImage}
                alt={article.title}
                className="w-full h-40 md:h-60 object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/blog-fallback/1400/900";
                }}
              />
            </div>

            <div className="text-homepageHeaderText text-base md:text-lg font-medium space-y-4">
              {article.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
              <h2 className="text-titansDarkBlue font-semibold text-2xl md:text-3xl mb-4">
                This week challenge
              </h2>
              <p className="text-homepageHeaderText text-base md:text-lg font-medium">
                {article.challenge || "Choose one small healthy habit and repeat it every day this week."}
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
              <h2 className="text-titansDarkBlue font-semibold text-2xl md:text-3xl mb-4">Watch</h2>
              <div className="max-w-xl">
                <VideoPlayer videoUrl={article.videoUrl} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
            <h2 className="text-titansDarkBlue font-semibold text-2xl md:text-3xl mb-4">Top tips</h2>
            <ul className="text-homepageHeaderText text-base md:text-lg font-medium space-y-3">
              {article.tips.map((tip) => (
                <li key={tip}>- {tip}</li>
              ))}
            </ul>
            <Link className="inline-block mt-6 text-[#D14267] font-semibold" to="/Blog">
              Back to blog topics
            </Link>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
            <h2 className="text-titansDarkBlue font-semibold text-2xl md:text-3xl mb-4">
              More to read
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/Blog/${post.id}`}
                  className="rounded-2xl bg-slate-50 p-4 transition duration-300 hover:-translate-y-0.5"
                >
                  <p className="text-homepageHeaderText text-xs font-semibold mb-1">
                    {post.category} • {post.readTime}
                  </p>
                  <p className="text-titansDarkBlue text-lg font-semibold">{post.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArticle;
