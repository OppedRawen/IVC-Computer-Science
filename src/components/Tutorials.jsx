import { tutorialsMap } from "./fakeData";

import ToggleItem from "./ToggleItem";
import Tags from "./Tags";

function Tutorials() {
	return (
		<ul className="resource-list space-y-4">
			{tutorialsMap.map(tutorial => (
                <li key={tutorial.id} className="border-b border-gray-600 pb-4">
				<ToggleItem
					key={tutorial.id}
					id={tutorial.id}
					title={tutorial.title}
					description={tutorial.description}
					url={tutorial.url}
					urlText="Watch the video here"
				>
					<Tags tags={tutorial.tags} />
				</ToggleItem>
                </li>
			))}
		</ul>
	);
}

export default Tutorials;