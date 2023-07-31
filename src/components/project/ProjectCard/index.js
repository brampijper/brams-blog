import React from 'react';
import { ExternalLink } from 'react-feather'

export default function ProjectCard({project}) {
    const { homepage, title, description } = project;

    return (
        <li className="card-link mb-4 border rounded p-4 hover:bg-gray-100 relative">
            <a 
              href={homepage} 
              title="view homepage"
              target="_blank" 
              rel="noopener noreferrer" 
            >
                <div className="flex flex-row items-center">
                    <h4 className="shrink text-lg md:text-xl font-medium mr-2 text-gray-900" itemProp="headline">
                        {title}
                    </h4>
                    <ExternalLink width={14} />
                </div>

                <p  className="text-gray-600"
                    itemProp="description"
                    dangerouslySetInnerHTML={{
                        __html: description,
                    }}
                />
            </a>
        </li>
    )
}