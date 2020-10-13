import React from "react";
import {usePage, useSetNextPage, useSetPrevPage} from "../PageContext";
import {Button} from "../Button";



export const PrevPage = () => {
  const setPrevPage = useSetPrevPage();
  return <Button onClick={setPrevPage}>Prev Page</Button>;
}
export const NextPage = () => {
  const setNextPage = useSetNextPage();
  return <Button onClick={setNextPage} children="NExt Page" />;
}

export const CurrentPage = () => {
  const page = usePage();
  return     <p>{page}</p>;
}

export const Pagination = () => {
  return (  <div className="Pagination">
    <PrevPage />
    <CurrentPage />
    <NextPage />
  </div>);
};
