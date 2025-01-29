"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import TableFilter from "./TableFilter";

export default function PostTable() {
  const [type, setType] = useState("todos");
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [type]);

  console.log(data);

  return (
    <div className="flex flex-col">
      <div className="flex items-center p-2 gap-x-4 justify-end">
        <TableFilter setType={setType}></TableFilter>
        {type === "posts" && (
          <button className="w-32 h-12 p-4 flex items-center justify-center border-[1px] border-gray-200 rounded-sm">
            Add Post
          </button>
        )}
      </div>
      <Table>
        <TableCaption>A list of {type}</TableCaption>
        <TableHeader>
          <TableRow>
            {data.length !== 0 &&
              Object.keys(data[0]).map((header, index) => (
                <TableHead key={index}>{header}</TableHead>
              ))}

            {/* <TableHead>Title</TableHead>
            <TableHead className="">Body</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length !== 0 ? (
            data.map((values, index) => (
              <TableRow key={index}>
                {Object.keys(data[0]).map((dat, vindex) => (
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
