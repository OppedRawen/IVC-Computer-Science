import PropTypes from "prop-types";


function Tags({ tags }) {
	return (
		<>
			{tags.map(tag => {
				return <p className="tag">{tag}</p>;
			})}
		</>
	);
}

Tags.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;