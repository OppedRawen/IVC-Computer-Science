// import PropTypes from "prop-types";
// import { useState } from "react";

// function ToggleItem({
// 	id,
// 	title,
// 	description,
// 	url,
// 	urlText,
// 	children,
// 	publicationDate,
// }) {
// 	const [showButton, setShowButton] = useState(false);

// 	return (
// 		<li className="resource-list-item" key={id}>
// 			<button
// 				type="button"
// 				className={`resource-list-title ${showButton && "active"}`}
// 				onClick={() => setShowButton(prevState => !prevState)}
// 			>
// 				{title}
// 			</button>

// 			<div className={`resource-list-description ${showButton && "active"}`}>
// 				<p>{description}</p>
// 				<a
// 					className="resource-link"
// 					href={url}
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					{urlText}. {/* Will open link in new tab*/}
// 				</a>
// 			</div>
// 			{publicationDate && <p>Publication date: {publicationDate}</p>}
// 			<div className="tagsContainer">{children}</div>
// 		</li>
// 	);
// }

// ToggleItem.propTypes = {
// 	id: PropTypes.number.isRequired,
// 	title: PropTypes.string.isRequired,
// 	description: PropTypes.string.isRequired,
// 	publicationDate: PropTypes.string.isRequired,
// 	url: PropTypes.string.isRequired,
// 	urlText: PropTypes.string.isRequired,
// 	children: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default ToggleItem;

import PropTypes from "prop-types";
import { useState } from "react";

function ToggleItem({ id, title, description, url, tags, urlText = 'See more' }) {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <li key={id}>
            <button
                type="button"
                onClick={() => setShowDescription(prev => !prev)}
                className={`block w-full text-left px-4 py-2 transition-colors ${showDescription ? 'bg-gray-400 text-black' : 'bg-transparent text-white'} hover:bg-orange-500 hover:text-gray-800`}
            >
                {title}
            </button>
            <div className={`transition-all transform origin-top ${showDescription ? 'max-h-[50rem] opacity-100 mt-2' : 'max-h-0 opacity-0'} px-4`}>
                <p className="text-white mb-2">{description}</p>
                <a
                    className="text-orange-500 hover:underline"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {urlText}
                </a>
               {tags&& <p className="text-white mt-2">Tags: {tags.join(", ")}</p>}
            </div>
        </li>
    );
}

ToggleItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    urlText: PropTypes.string
};

export default ToggleItem;
