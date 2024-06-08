import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const Product = () => {
  const [userdata, setUserdata] = useState([]); // Initial state as an empty array
  const [filterText, setFilterText] = useState(''); // State for filter text
  const [filterAge, setFilterAge] = useState(''); // State for filter age
  const [filterGender, setFilterGender] = useState(''); // State for filter gender
  const [filteredData, setFilteredData] = useState([]); // State for filtered data

  const columns = [
    {
      name: "ID",
      selector: row => row.id,
    },
    {
      name: "First Name",
      selector: row => row.firstName,
    },
    {
      name: "Age",
      selector: row => row.age,
    },
    {
      name: "Gender",
      selector: row => row.gender,
    }
  ];

  useEffect(() => {
    axios.get('https://dummyjson.com/users') // Corrected the endpoint to /users
      .then((response) => {
        console.log(response);
        setUserdata(response.data.users); // Set the users array from the response
        setFilteredData(response.data.users); // Initialize filteredData with all users
      })
      .catch(err => console.log("Axios error.....", err));
  }, []);

  // useEffect(() => {
  //   // Filter userdata based on filterText, filterAge, and filterGender
  //   const filtered = userdata.filter(user => {
  //     const matchesFirstName = user.firstName.toLowerCase().includes(filterText.toLowerCase());
  //     const matchesAge = filterAge ? user.age === parseInt(filterAge) : true;
  //     const matchesGender = filterGender ? user.gender.toLowerCase() === filterGender.toLowerCase() : true;

  //     return matchesFirstName && matchesAge && matchesGender;
  //   });
  //   setFilteredData(filtered);
  // }, [filterText, filterAge, filterGender, userdata]);


useEffect(()=>{
  const filtered=userdata.filter(user=>{
    const matchesFirstName = user.firstName.toLowerCase().includes(filterText.toLowerCase());
    const matchesAge =filterAge ? user.age === parseInt(filterAge) : true;
    const matchGender = filterGender ? user.gender.toLowerCase()===filterGender : true;


  return matchesFirstName && matchGender && matchesAge;
  });setFilteredData(filtered);
},[filterText, filterAge, filterGender, userdata]);





  return (
    <div>
      <h1>Axios data</h1>
      <input 
        type="text" 
        placeholder="Filter by first name" 
        value={filterText} 
        onChange={(e) => setFilterText(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Filter by age" 
        value={filterAge} 
        onChange={(e) => setFilterAge(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Filter by gender" 
        value={filterGender} 
        onChange={(e) => setFilterGender(e.target.value)} 
      />
      <DataTable
        columns={columns}
        data={filteredData} // Use filtered data for the table
      />
    </div>
  );
}

export default Product;
