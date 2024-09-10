import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

export default function BasicTable() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Data (id and titles)</h1>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id}.{item.title}
            {item.completed}
          </li>
        ))}
      </ul>
    </div>
  );
}
