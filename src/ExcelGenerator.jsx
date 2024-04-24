// ExcelGenerator.js
import React from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const ExcelGenerator = () => {
  const downloadExcel = () => {
    // Define data for the Excel file
    const data = [
      ["Name", "Age", "Country"],
      ["John", 30, "USA"],
      ["Alice", 25, "UK"],
      ["Bob", 35, "Canada"],
    ];

    // Create a new Excel workbook
    const workbook = XLSX.utils.book_new();

    // Add a worksheet to the workbook
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Style the worksheet (optional)
    const range = XLSX.utils.decode_range(worksheet["!ref"]);
    for (let i = range.s.r; i <= range.e.r; i++) {
      for (let j = range.s.c; j <= range.e.c; j++) {
        const cell = worksheet[XLSX.utils.encode_cell({ r: i, c: j })];
        cell.s = {
          font: { bold: true },
          fill: { fgColor: { rgb: "FFFF00" } },
        };
      }
    }

    // Convert the workbook to a binary string
    const excelBinaryString = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "binary",
    });

    // Convert the binary string to a Blob
    const excelBlob = new Blob([s2ab(excelBinaryString)], {
      type: "application/octet-stream",
    });

    // Save the Blob as an Excel file
    saveAs(excelBlob, "data.xlsx");
  };

  // Convert a string to an ArrayBuffer
  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  };

  return (
    <div>
      <button onClick={downloadExcel}>Download Excel</button>
    </div>
  );
};

export default ExcelGenerator;
