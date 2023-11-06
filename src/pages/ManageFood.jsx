import { useContext, useEffect, useState } from "react";
import UseAxios from "../hooks/UseAxios/UseAxios";
import { AuthContext } from "../hooks/Provider/AuthProvider";
import * as React from "react";
import { useTable } from "react-table";

const ManageFood = () => {
  const [manageFood, setManageFood] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosUrl = UseAxios();
  const url = `/api/v1/food?email=${user?.email}`;

  useEffect(() => {
    axiosUrl.get(url).then((data) => setManageFood(data.data));
  }, [axiosUrl, url]);

  const handleEdit = () => {
    
    console.log("Edit clicked for:", );
  };
  const handleDelete = () => {
  
    console.log("handleDelete clicked for:", );
  };

  const data = React.useMemo(() => manageFood, [manageFood]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Food Name",
        accessor: "food_name",
      },
      {
        Header: "Donator Name",
        accessor: "donar_name",
      },
      {
        Header: "Donator Email",
        accessor: "donator_email",
      },
      {
        Header: "Food Quantity",
        accessor: "food_quantity",
      },
      {
        Header: "Edit",
        accessor: "edit",
        Cell: ({ row }) => (
          <button onClick={() => handleEdit()}>Edit</button>
        ),
      },
      {
        Header: "Delete",
        accessor: "Delete",
        Cell: ({ row }) => (
            <button onClick={() => handleDelete()}>Delete</button>
          ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="w-11/12 mx-auto my-12 lg:my-20 min-h-[60vh]">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 lg:mb-10">
        Your added food: {manageFood.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border overflow-hidden shadow-md">
          <thead className="text-left p-3 border">
            {headerGroups.map((headerGroup, idx) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={idx}>
                {headerGroup.headers.map((column, idx) => (
                  <th
                    {...column.getHeaderProps()}
                    className="bg-[#3b3939] text-[#d3d3d3] text-sm md:text-base p-3"
                    key={idx}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="text-left">
            {rows.map((row, idx) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={idx}
                  className="group hover:bg-[rgba(255,255,255,0.3)]"
                >
                  {row.cells.map((cell, idx) => (
                    <td
                      {...cell.getCellProps()}
                      className="relative p-3 md:p-4"
                      key={idx}
                    >
                      {cell.render("Cell")}
                      <div className="bg-[rgba(255,255,255,0.2)] z-[-1] group-hover:block"></div>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageFood;
