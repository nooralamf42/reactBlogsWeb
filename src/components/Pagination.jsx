import React, { useContext, useEffect } from "react";
import Container from "./Container";
import { AppContext } from "../context/AppContext";
import { useLocation } from "react-router-dom";

export default function Pagination() {
  let { page,setPage, totalPages, handlePage} = useContext(AppContext);
  // let location = useLocation().pathname;
  function clickHandler(symbol) {
    if(symbol===-1){
      handlePage(page-1)
    }
    else{
      handlePage(page+1)
    }
  }
  return (
    <div className="py-6 border-t-2 fixed bottom-0 bg-white w-full">
      <Container>

        <div className="flex justify-between">
        <div className="space-x-2">
        <button
          className={`px-3 py-1 border-2 border-gray-200 rounded-md font-semibold ${page>1? "inline-block" : "hidden"}`}
          onClick={()=>clickHandler(-1)}
        >
          Previous
        </button>
          <button
            className={`px-3 py-1 border-2 border-gray-200 rounded-md font-semibold ${page==totalPages? "hidden" : "inline-block"}`}
            onClick={()=>clickHandler(1)}
          >
            Next
          </button>
        </div>
          <p className="font-semibold">
            Page {page} of {totalPages}
          </p>
        </div>
      </Container>
    </div>
  );
}
