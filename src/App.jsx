import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddForm from './components/Add_form';
import ShowForm from './components/Show_form';

function App() {
  const [data, setData] = useState([]);

  // Function to add a new entry to data
  const handleAddData = (newEntry) => {
    setData([...data, { id: data.length + 1, ...newEntry }]);
  };

  // Function to delete an entry by id
  const handleDelete = (id) => {
    setData(data.filter((entry) => entry.id !== id));
  };

  // Function to update an entry by id
  const handleUpdate = (updatedEntry) => {
    setData(data.map((entry) => (entry.id === updatedEntry.id ? updatedEntry : entry)));
  };
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<h2>Welcome to the Dashboard</h2>} />
          <Route path="/Add_Form" element={<AddForm onAdd={handleAddData} />} />
          <Route
            path="/Show_Details"
            element={<ShowForm data={data} onDelete={handleDelete} onUpdate={handleUpdate} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
