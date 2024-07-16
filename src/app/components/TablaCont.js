'use client'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";


const classNames = {
    wrapper: ["max-h-[382px]"],
  };

export default async function Tabla(props) {
  const columns = props.columns
  const rows = props.rows
  return (
    <Table isHeaderSticky  color="success" selectionMode="single" 
    defaultSelectedKeys={["1"]}  aria-label="Prueba " className="lg:flex p-5" classNames={classNames}>
      <TableHeader>
        {columns.map((column) =>
          <TableColumn key={column.key}>{column.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>
        {rows.map((row) =>
          <TableRow key={row.key}>
            {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}