import React from 'react';
import { Link } from 'gatsby';

export default function BlogPostCard({post}) {
    const { slug, date, title, excerpt, description } = post;
    
    return (
        <Link className="blog-posts-links" to={slug}>
            <article  className="blog-posts">
            <header>
                <small className="blog-post-date">{date}</small>
                <h2>
                    <span itemProp="headline">{title}</span>
                </h2>
            </header>
            <section>
                <p
                dangerouslySetInnerHTML={{
                    __html: description || excerpt,
                }}
                itemProp="description"
                />
            </section>
            </article>
        </Link>
    )
}