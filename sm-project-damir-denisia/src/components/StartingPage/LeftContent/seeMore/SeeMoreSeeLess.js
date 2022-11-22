import { useState } from "react";
import "./SeeMoreSeeLess.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



 const SeeMoreSeeLess = ({children}) => {

    const [isSeeMoreShown, setSeeMoreShown] = useState(false);
const toggleButton =  ( ) => {
    setSeeMoreShown( (prevState) => {
        return !prevState})
}

  return (
    <div className="seeMoreSeeLess">
    {isSeeMoreShown ? children : null}
    <button className="leftContentButton" onClick={toggleButton}>
    {isSeeMoreShown ? <><KeyboardArrowUpIcon></KeyboardArrowUpIcon>See Less</> : <><KeyboardArrowDownIcon></KeyboardArrowDownIcon> See More</>}
      </button>
      
    </div>
  )
}

export default SeeMoreSeeLess;