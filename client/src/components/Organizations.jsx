import { organizationsMap } from "./fakeData";
import {motion} from 'framer-motion';
import ToggleItem from "./ToggleItem";
import Tags from "./Tags";

function Organizations() {
    const listItem = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };
    
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
	return (
        <motion.ul className="resource-list space-y-4" variants={container} initial="hidden" animate="visible">
			{organizationsMap.map(org => (
                 <motion.li key={Organizations.id} className="border-b border-gray-600 pb-4" variants={listItem}>
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
                </motion.li>
			))}
		</motion.ul>
	);
}

export default Organizations;