"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { useEffect, useState } from "react";
import TableFilter from "./TableFilter";
import DialogPost from "./DialogPost";

export default function PostTable() {
  const [type, setType] = useState("todos");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [type]);

  return (
    <div className="flex flex-col w-auto">
      <div className="flex items-center p-2 gap-x-4 justify-end">
        <TableFilter setType={setType}></TableFilter>
        {type === "posts" && <DialogPost></DialogPost>}
      </div>
      <Table>
        <TableCaption>A list of {type}</TableCaption>
        <TableHeader>
          <TableRow>
            {data.length !== 0 &&
              Object.keys(data[0])
                .slice(0, 3)
                .map((header, index) => (
                  <TableHead key={index}>{header}</TableHead>
                ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length !== 0 ? (
            data.map((values, index) => (
              <TableRow key={index}>
                {Object.keys(data[0])
                  .slice(0, 3)
                  .map((dat, vindex) => (
                    <TableCell key={vindex} className="font-medium">
                      {values[dat]}
                    </TableCell>
                  ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="font-medium">No data to display</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
