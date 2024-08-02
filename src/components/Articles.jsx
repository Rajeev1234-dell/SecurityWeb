import Image from "next/image";
import React from "react";

function Articles({ articles }) {
  return (
    <section>
      <div className="container articles">
        <h2 className="articles__title">{articles.title}</h2>
        <div className="articles__wrapper">
          {articles.articles?.map((article) => (
            <div className="articles__item">
              <div className="articles__img">
                <Image
                  src={article.img}
                  width={344}
                  height={257}
                  className="articles__profile"
                />
              </div>
              <p className="articles__content">{article.content}</p>
              <p className="articles__date">
                <span>
                  <Image
                    className="articles__dateIcon"
                    src={article.dateIcon}
                    width={15}
                    height={15}
                    alt=""
                  />
                </span>
                {article.date}
              </p>
              <button className="articles__btn">{article.title}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;
