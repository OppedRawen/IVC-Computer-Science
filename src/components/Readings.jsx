import { readingsMap } from "./fakeData";
import {motion} from 'framer-motion';
import ToggleItem from "./ToggleItem";
import Tags from "./Tags";
function Readings() {
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
        {readingsMap.map(reading => {
            return (
                // 3. Convert li to motion.li and apply variants
                <motion.li key={reading.id} className="border-b border-gray-600 pb-4" variants={listItem}>
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
                </motion.li>
            );
        })}
    </motion.ul>
		
		
	);
}

export default Readings;