import axios from "axios";

export default {
  // Gets all books
  getListings: function() {
    return axios.get("/api/listings");
  },
  // Gets the book with the given id
  getListing: function(id) {
    return axios.get("/api/listings/" + id);
  },
  // Deletes the book with the given id
  deleteListing: function(id) {
    return axios.delete("/api/listings/" + id);
  },
  // Saves a book to the database
  saveListing: function(listingData) {
    console.log(listingData)
    const test = new FormData();
    test.append('file',listingData.file)
    // test.append('body',
    // {
    //   title: listingData.title,
    //   price: listingData.price,
    //   description: listingData.description
    // }
    // )
    test.append('title', listingData.title)
    test.append('price', listingData.price)
    test.append('description', listingData.description)
    console.log(test)
    const config = { headers:{
      'content-type': 'multipart/form-data'
    }}
    return axios.post("/api/listings/", test, config);
  }
};