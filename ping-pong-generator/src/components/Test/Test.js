// import React from "react"
// let array =[1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]






const Test = ({players}) => {
  let time = players.reduce(function(result, value, index, array) {
    if (index % 2 === 0)
    result.push(array.slice(index, index + 2));
    return result;
  }, []);
  let timemap = time.map((value, index) =>(
      <li key={index}>
          <button>{value}</button>
      </li>
  ))
  

    return (
        <div>
        {/* <ul>{timemap}</ul> */}
        <ul>
          {timemap}
        </ul>
        </div>
        )
    };


export default Test;