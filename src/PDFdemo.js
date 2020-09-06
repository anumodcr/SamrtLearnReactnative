import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  pageSize:{    
    margin:20
  },
  section: {
    margin: 0,
    padding:10,
    flexGrow: 1,
    borderColor: "blue",
    border:1,
    fontSize:"12"
  }
});

// Create Document Component
const PDFdemo = () => (
  <Document>
    <Page size="A4">
    <View style={styles.pageSize}>
      <View style={styles.page}>        
        <View style={styles.section}>
            <Text>Section #1</Text>
        </View>
        
        <View style={styles.section}>
            <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
        
      </View>
      </View>
      <View style={styles.page}>        
        <View style={styles.section}>
            <Text>Section #1</Text>
        </View>
        
        <View style={styles.section}>
            <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
        
      </View>
      </View>
      <View style={styles.page}>        
        <View style={styles.section}>
            <Text>Section #1</Text>
        </View>
        
        <View style={styles.section}>
            <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
        
      </View>
      </View>
      <View style={styles.page}>        
        <View style={styles.section}>
            <Text>Section #1</Text>
        </View>
        
        <View style={styles.section}>
            <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
        
      </View>
      </View>      
      </View>
    </Page>
  </Document>
);


export default PDFdemo

// import React from 'react'

// const PDFdemo = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default PDFdemo
