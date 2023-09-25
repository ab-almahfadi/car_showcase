"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";



const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
    const router = useRouter();

    const handleNavication = () => {
        const newLimit = (pageNumber + 1) * 10;


        setLimit(newLimit);
        // const newPathname = updateSearchParams("limit",`${newLimit}`);

        // router.push(newPathname , { scroll: false});
    }


  return (
    <div className="w-full flex-center gap-5 mt-10 ">
        {!isNext &&(
            <CustomButton 
            title='Show More'
            btnType='button'
            containerStyles="bg-primary-blue rounded-full text-white"
            handleClick={handleNavication}
            />
        )}
    </div>
  )
}

export default ShowMore