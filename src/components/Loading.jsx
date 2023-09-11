import { useEffect,useState } from "react";
import {motion} from 'framer-motion';
import {HiOutlineDesktopComputer} from 'react-icons/hi';

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }
        , 1500);
        return () => clearTimeout(timer);
    }, []);

    if(isLoading){
        return (
            <div className="flex flex-col items-center justify-center h-screen">
              <motion.div
                className="text-3xl font-bold w-10 h-10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <HiOutlineDesktopComputer className="text-[#cacaca] text-3xl font-bold w-20 h-20 " />
              </motion.div>
              <motion.div
                className="mt-14 h-2 w-40 bg-gray-200 rounded"
                initial={{ width: 0 }}
                animate={{ width: '40%' }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
          );
    }
    return null;
};

export default Loading;