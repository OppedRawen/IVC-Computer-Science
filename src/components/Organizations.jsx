import { organizationsMap } from "./fakeData";

import ToggleItem from "./ToggleItem";
import Tags from "./Tags";

function Organizations() {
	return (
		<ul className="resource-list space-y-4">
           
			{organizationsMap.map(org => (
                 <li key={Organizations.id} className="border-b border-gray-600 pb-4">
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
                </li>
			))}
		</ul>
	);
}

export default Organizations;