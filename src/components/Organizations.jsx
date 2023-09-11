import { organizationsMap } from "./fakeData";

import ToggleItem from "./ToggleItem";
import Tags from "./Tags";

function Organizations() {
	return (
		<ul className="resource-list">
			{organizationsMap.map(org => (
				<ToggleItem
					key={org.id}
					id={org.id}
					title={org.title}
					description={org.description}
					url={org.url}
					urlText="Learn more here"
				>
					<Tags tags={org.tags} />
				</ToggleItem>
			))}
		</ul>
	);
}

export default Organizations;