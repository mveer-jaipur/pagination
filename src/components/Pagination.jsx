import { useRef } from "react";

export default function Pagination({count=10, handlePageChange}) {


    const pageNumber = useRef(0);

    const pageChangeHandler = (page) => {
        handlePageChange(page);
        pageNumber.current = page;
    }

    const handleNext = () => {
        handlePageChange(pageNumber.current + 1);
         pageNumber.current = pageNumber.current  + 1;
    }

    const handlePrev = () => {
        handlePageChange(pageNumber.current - 1);
        pageNumber.current = pageNumber.current  - 1;
    }

    return (
        <div className="flex flex-row justify-center items-center mt-10">
            <button disabled={pageNumber.current === 0} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-3" onClick={handlePrev}>Prev</button>
            {
                Array.from(Array(count).keys())
                .map(page => 
                    <div className={`cursor-pointer w-10 h-10 bg-slate-300 flex flex-row justify-center text-center align-middle items-center border-gray-500 border-solid rounded-md m-1`}
                        key={page} 
                        onClick={() => pageChangeHandler(page + 1)}>
                    {page +  1}
                </div>)}
            <button disabled={pageNumber.current === count} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3" type="button" onClick={handleNext}>Next</button>
        </div>
    )
}