import React, { useState } from 'react';
import Navbar from './Navbar';

function ShowForm({ data, onDelete, onUpdate }) {
  // State to track the entry currently being edited
  const [editingEntry, setEditingEntry] = useState(null);

  // Form state for editing an entry
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    aadhar: '',
    contact: '',
    address: ''
  });

  // Handler for opening the update form with the selected entry data
  const handleEdit = (entry) => {
    setEditingEntry(entry.id);
    setFormData({
      name: entry.name,
      college: entry.college,
      aadhar: entry.aadhar,
      contact: entry.contact,
      address: entry.address
    });
  };

  // Handler for input changes in the update form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handler for submitting the updated data
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    onUpdate({ id: editingEntry, ...formData });
    setEditingEntry(null); // Close the form after update
  };

  return (
    <>

      <div className="p-4">
        <ul className="grid grid-cols-8 text-center border-separate">
          <li className="border-solid border-black border-2">S. No</li>
          <li className="border-solid border-black border-2">Name</li>
          <li className="border-solid border-black border-2">College Name</li>
          <li className="border-solid border-black border-2">Aadhar No</li>
          <li className="border-solid border-black border-2">Contact No</li>
          <li className="border-solid border-black border-2">Address</li>
          <li className="border-solid border-black border-2">Update</li>
          <li className="border-solid border-black border-2">Delete</li>
        </ul>
        {data.map((entry, index) => (
          <ul key={entry.id} className="grid grid-cols-8 text-center">
            <li className="border-solid border-black border-2">{index + 1}</li>
            <li className="border-solid border-black border-2">{entry.name}</li>
            <li className="border-solid border-black border-2">{entry.college}</li>
            <li className="border-solid border-black border-2">{entry.aadhar}</li>
            <li className="border-solid border-black border-2">{entry.contact}</li>
            <li className="border-solid border-black border-2">{entry.address}</li>
            <li className="border-solid border-black border-2">
              <button onClick={() => handleEdit(entry)} className="text-blue-600">Update</button>
            </li>
            <li className="border-solid border-black border-2">
              <button onClick={() => onDelete(entry.id)} className="text-red-600">Delete</button>
            </li>
          </ul>
        ))}

        {/* Display update form if editingEntry is set */}
        {editingEntry && (
          <div className="p-4 bg-gray-100 mt-4 rounded-md shadow-lg">
            <h2 className="text-center text-lg font-bold mb-4">Update Entry</h2>
            <form onSubmit={handleUpdateSubmit} className="grid grid-cols-2 gap-4">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 border w-full rounded-md"
                />
              </div>
              <div>
                <label>College Name</label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  className="p-2 border w-full rounded-md"
                />
              </div>
              <div>
                <label>Aadhar No</label>
                <input
                  type="text"
                  name="aadhar"
                  value={formData.aadhar}
                  onChange={handleChange}
                  className="p-2 border w-full rounded-md"
                />
              </div>
              <div>
                <label>Contact No</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="p-2 border w-full rounded-md"
                />
              </div>
              <div className="col-span-2">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="p-2 border w-full rounded-md"
                />
              </div>
              <div className="col-span-2 flex justify-center mt-4 space-x-4">
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Save Changes</button>
                <button onClick={() => setEditingEntry(null)} className="bg-gray-400 text-white p-2 rounded-lg">Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default ShowForm;
