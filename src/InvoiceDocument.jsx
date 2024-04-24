// InvoiceDocument.js
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
    textDecoration: "underline",
  },
  subheader: {
    fontSize: 14,
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: "#000",
  },
  itemName: {
    flex: 2,
  },
  itemQty: {
    flex: 1,
    textAlign: "center",
  },
  itemPrice: {
    flex: 1,
    textAlign: "right",
  },
  total: {
    fontSize: 16,
    textAlign: "right",
    marginTop: 10,
  },
});

// Create Document Component
const InvoiceDocument = ({ invoiceData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Invoice</Text>
      <View style={styles.section}>
        <Text style={styles.subheader}>
          Invoice Number: {invoiceData.invoiceNumber}
        </Text>
        <Text style={styles.subheader}>
          Invoice Date: {invoiceData.invoiceDate}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Bill To:</Text>
        <Text style={styles.text}>{invoiceData.billTo.name}</Text>
        <Text style={styles.text}>{invoiceData.billTo.address}</Text>
        <Text style={styles.text}>
          {invoiceData.billTo.city}, {invoiceData.billTo.state},{" "}
          {invoiceData.billTo.zip}
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.header}>Items:</Text>
        {invoiceData.items.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemName}>{item.description}</Text>
            <Text style={styles.itemQty}>{item.quantity}</Text>
            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.total}>
        Total: ${calculateTotal(invoiceData.items)}
      </Text>
    </Page>
  </Document>
);

// Helper function to calculate total amount
const calculateTotal = (items) => {
  return items
    .reduce((total, item) => total + item.quantity * item.price, 0)
    .toFixed(2);
};

export default InvoiceDocument;
