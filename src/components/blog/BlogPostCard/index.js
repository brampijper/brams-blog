import React from 'react';
import { Link } from 'gatsby';

import "./style.css"

export default function BlogPostCard({post}) {
    const { slug, date, title, excerpt, description } = post;

    return (
        <Link className="card-link" to={slug}>
            <article className="card-content">
                <header>
                    <small className="card-date">
                        {date}
                    </small>
                    <h4 className="card-title">
                        <span itemProp="headline">
                            {title}
                        </span>
                    </h4>
                </header>

                <section>
                    <p  className="card-description"
                        itemProp="description"
                        dangerouslySetInnerHTML={{
                            __html: description || excerpt,
                        }}
                    />
                </section>
            </article>
        </Link>
    )
}