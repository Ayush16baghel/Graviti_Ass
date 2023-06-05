import React, { useEffect, useState } from "react";
import axios from "axios";
function TableData() {
  const [tabledata, settabledata] = useState([]);
  const [search, setsearch] = useState("");

  const Register_Product = "Prb27JHG@hjhgkjhjsJH!JHGKNknvsgGJKp06HGFhf";
  const View_Product = "1";
  const Delete_Product= "2";
  useEffect(() => {
    axios
      .post(
        "",
        { Register_Product, View_Product, Delete_Product }
      )
      .then((res) => settabledata(res.data.data));
  }, []);

  console.log(tabledata);

  return (
    <div className="container border border-2 rounded-5 mx-5 my-5">
      <div className="search d-flex justify-content-center align-items-center">
        <span className="px-2">Search</span>
        <input
          type="text"
          className="w-50 mt-2 mb-2"
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>  Purchased Date</th>
              <th> Company</th>
              <th> Under Warranty</th>
              
            </tr>
          </thead>

          <tbody>
            {tabledata
              .filter(
                (result) =>
                  result.Product_name.includes(search) ||
                  result.Category.includes(search) ||
                  result.Purchased_Date.includes(search) ||
                  result.Company.includes(search) ||
                  result.Under_Warranty.includes(search)
              )
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.Product_name}</td>
                  <td>{item.Category}</td>
                  <td>{item.Purchased_Date}</td>
                  <td>{item.Company}</td>
                  <td>{item.Under_Warranty}</td>
                  
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableData;
