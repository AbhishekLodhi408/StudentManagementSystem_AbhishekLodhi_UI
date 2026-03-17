import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {}, []);

  const getData = async () => {
    try {
      const token = localStorage.getItem("token"); // replace with actual token

      const response = await fetch(
        `https://localhost:7238/SMSystem/getsudents`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await response.json();
      setStudents(data);
    } catch (error) {}
  };

  const coulums = [
    { field: "studentId", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "number",
      width: 110,
      editable: true,
    },
  ];

  return (
    <div>
      <h1>Students</h1>
      <DataGrid
        rows={students}
        columns={coulums}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}
