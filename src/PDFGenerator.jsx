// PDFGenerator.js
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    marginBottom: 50,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    paddingTop: 10,
    borderTop: "1pt solid #666",
  },
  content: {
    marginTop: 40,
    marginBottom: 40,
  },
});

// Header component
const Header = () => (
  <View style={styles.header}>
    <Text>Header - Your Company Name</Text>
  </View>
);

// Footer component
const Footer = ({ pageNumber }) => (
  <View style={styles.footer}>
    <Text>Footer - Page {pageNumber}</Text>
  </View>
);

// PDFGenerator component
const PDFGenerator = () => {
  const pages = [1, 2, 3]; // Example: Define the number of pages dynamically

  return (
    <Document>
      {pages.map((pageNumber) => (
        <Page key={pageNumber} size="A4" style={styles.page}>
          <Header />
          <View style={styles.content}>
            <Text>
              This is the content of page {pageNumber} of the PDF document. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minus odio excepturi fugit culpa architecto reiciendis quae atque repellat, sit non sint labore aliquid similique magnam laudantium, omnis est earum tenetur saepe veritatis obcaecati. Eveniet explicabo ut hic assumenda nulla perferendis corrupti qui quos doloremque autem expedita molestias alias fugit debitis cupiditate, similique culpa distinctio veniam? Necessitatibus eligendi provident voluptas. Saepe necessitatibus, maiores molestias ipsam odio, aspernatur veniam ratione aliquid id cumque enim dignissimos accusamus deleniti. Unde saepe cum commodi repellendus officia doloremque dolore illo magnam ex, non eveniet autem ullam fugiat doloribus at sunt. Vero sapiente eum nesciunt accusamus asperiores perspiciatis magnam, iste architecto non voluptates repellat ipsa, pariatur aut? Architecto, illum sunt et, veritatis dolore iusto quos ducimus pariatur unde non libero nobis ea facere vero accusamus maiores quasi, distinctio perspiciatis consequatur maxime eveniet! Perferendis tempora eaque quam beatae vitae unde nulla nam molestiae, animi soluta illum laudantium quae saepe, aspernatur non harum. Doloribus, amet! Vero voluptate cum rem omnis dolor qui minima necessitatibus harum maxime eius repellat quos laborum commodi soluta magni officiis animi provident explicabo dignissimos, ipsam molestias ullam! Ut fuga porro perspiciatis ducimus dolore sed quas, quae natus autem quam reprehenderit ea corrupti impedit fugit eaque iusto reiciendis tempore in. Facilis delectus minima praesentium dolor excepturi. Porro omnis minus, praesentium tempora esse temporibus quas quaerat fugiat. Officia eaque hic modi accusantium perspiciatis quod, consequuntur iste tempora beatae ab quam alias aliquam nesciunt dolores deleniti ex aliquid eius suscipit? Cupiditate, totam aliquid praesentium rem quasi sit iure tempora veritatis esse, exercitationem adipisci, amet explicabo aperiam repellendus repellat deleniti? Enim at aperiam dignissimos iste, quibusdam voluptas ex? Id repellat ab vero officiis architecto optio quod fugiat corporis. Repellendus cumque possimus, expedita dignissimos harum magni recusandae saepe omnis provident quasi voluptate eligendi eaque! Aliquam facilis similique sapiente ipsam.
              {/* Add your content here */}
            </Text>
          </View>
          <Footer pageNumber={pageNumber} />
        </Page>
      ))}
    </Document>
  );
};

export default PDFGenerator;
