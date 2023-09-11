import PropTypes from "prop-types";


function Tags({ tags }) {
	return (
		<>
			{tags.map((tag, index) => {
				return (
					<span 
						key={index}
						className="mr-2 mt-1 mb-1 px-2 py-1 text-white text-center border-1.5 border-blue-500 rounded-md cursor-pointer">
						{tag}
					</span>
				);
			})}
		</>
	);
}

Tags.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;