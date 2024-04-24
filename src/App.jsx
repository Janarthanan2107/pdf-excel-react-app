// InvoiceGenerator.js
import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoiceDocument from "./InvoiceDocument";
import InvoiceGenerator2 from "./InvoiceDocument2";
import ExcelGenerator from "./ExcelGenerator";
import PDFGenerator from "./PDFGenerator";

const invoiceData = {
  invoiceNumber: "INV123",
  invoiceDate: "January 1, 2023",
  billTo: {
    name: "John Doe",
    address: "123 Main St",
    city: "Anytown",
    state: "NY",
    zip: "12345",
  },
  items: [
    { description: "Item 1", quantity: 2, price: 25 },
    { description: "Item 2", quantity: 1, price: 50 },
  ],
};

// InvoiceGenerator component
const App = () => (
  <div>
    <h1 style={{ textAlign: "center" }}>Generating pdf & Excel</h1>
    <hr />
    <h1>Download Invoice using - @react-pdf/renderer</h1>
    <PDFDownloadLink
      document={<InvoiceDocument invoiceData={invoiceData} />}
      fileName="invoice.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download PDF"
      }
    </PDFDownloadLink>

    <h1>Download Invoice using - pdfmake</h1>
    <InvoiceGenerator2 />

    <h1>Download pdf with standard header and footer</h1>
    <PDFDownloadLink document={<PDFGenerator />} fileName="invoice.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download PDF"
      }
    </PDFDownloadLink>

    <h1>Download excel file using - xlsx</h1>
    <ExcelGenerator />
  </div>
);

export default App;
