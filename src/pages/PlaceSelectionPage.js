import { useDispatch } from "react-redux";
import { useEffect } from "react";
import TrainSelectionPageHeader from "../components/trainSelectionPage/TrainSelectionPageHeader";

export default function PlaceSelectionPage() {
  const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(putInputValue(""));
//     // eslint-disable-next-line
//   }, []);
  return (
    <>
    <TrainSelectionPageHeader/>
    </>
  );
}
