import React from 'react';
import { Link } from 'gatsby';

export default function BlogPost({posts}) {
    return (
        posts.map((post) => (
            <Link className="blog-posts-links" key={post.slug} to={post.slug}>
                <article  className="blog-posts">
                <header>
                    <h2>
                        <span itemProp="headline">{post.title}</span>
                    </h2>
                    <small>{post.date}</small>
                </header>
                <section>
                    <p
                    dangerouslySetInnerHTML={{
                        __html: post.description || post.excerpt,
                    }}
                    itemProp="description"
                    />
                </section>
                </article>
            </Link>
        ))
    )
}