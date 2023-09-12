import { readingsMap } from "./fakeData";

import ToggleItem from "./ToggleItem";
import Tags from "./Tags";
function Readings() {
	return (
		<ul className="resource-list space-y-4">
            	{readingsMap.map(reading => {
				return (
                    <li key={reading.id} className="border-b border-gray-600 pb-4">
                        <ToggleItem
                            id={reading.id}
                            title={reading.title}
                            publicationDate={reading.publicationDate}
                            description={reading.description}
                            url={reading.url}
                            urlText="Read it here"
                        >
                            <Tags tags={reading.tags} />
                        </ToggleItem>
                    </li>
                );
			})}
        </ul>
		
		
	);
}

export default Readings;