// InvoiceGenerator.js
import React from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// Set pdfMake fonts
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const InvoiceGenerator = () => {
  const downloadInvoice = () => {
    // Create document definition
    const documentDefinition = {
      content: [
        { text: "Invoice", style: "header" },
        { text: "Invoice Number: INV123", style: "subheader" },
        { text: "Invoice Date: January 1, 2023", style: "subheader" },
        { text: "Bill To:", style: "subheader" },
        { text: "John Doe", style: "text" },
        { text: "123 Main St", style: "text" },
        { text: "Anytown, NY 12345", style: "text" },
        { text: "Items:", style: "subheader" },
        {
          ul: ["Item 1: 2 x $25 = $50", "Item 2: 1 x $50 = $50"],
          style: "text",
        },
        { text: "Total: $100", style: "total" },
      ],
      styles: {
        header: {
          fontSize: 20,
          marginBottom: 10,
          alignment: "center",
        },
        subheader: {
          fontSize: 14,
          marginBottom: 5,
        },
        text: {
          fontSize: 12,
          marginBottom: 3,
        },
        total: {
          fontSize: 14,
          marginTop: 10,
          alignment: "right",
          bold: true,
        },
      },
    };

    // Create PDF
    const pdfDoc = pdfMake.createPdf(documentDefinition);

    // Download PDF
    pdfDoc.download("invoice.pdf");
  };

  return (
    <div>
      <button onClick={downloadInvoice}>Download PDF</button>
    </div>
  );
};

export default InvoiceGenerator;
