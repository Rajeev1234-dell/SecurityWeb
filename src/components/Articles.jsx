import Image from "next/image";
import React from "react";

function Articles({ articles }) {
  return (
    <section>
      <div className="container margin-top">
        <div className="articles">
          <h2>Latest Articles</h2>
          <div className="articles__details">
            {articles?.map((article) => (
              <div className="articles__item">
                <Image
                  src={article.img}
                  width={344}
                  height={257}
                  alt=""
                  className="article__img"
                />
                <p className="content">{article.content}</p>
                <p className="date">
                  <span>
                    <Image
                      className="dateIcon"
                      src={article.dateIcon}
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                  {article.date}
                </p>
                <button className="read-more">{article.title}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
