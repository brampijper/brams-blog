import React from 'react';
import { Link } from 'gatsby';

export default function BlogPostCard({post}) {
    const { slug, title, excerpt, date = null, description } = post;

    let dateElement

    if (date) {
        dateElement = (
            <small className="shrink-0">
                {date}
            </small>
        )
    }

    return (
        <li className="card-link mb-4 border rounded p-4 hover:bg-gray-100">
            <Link to={slug}>
                <div className="flex flex-row">
                    <h4 className="shrink text-lg md:text-xl font-medium mb-2 w-full text-gray-900" itemProp="headline">
                        {title}
                    </h4>
                    {dateElement}
                </div>

                <p  className="text-gray-600 line-clamp-2"
                    itemProp="description"
                    dangerouslySetInnerHTML={{
                        __html: excerpt || description,
                    }}
                />
            </Link>
        </li>
    )
}