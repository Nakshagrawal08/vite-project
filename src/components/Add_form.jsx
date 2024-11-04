import React, { useReducer } from 'react';

const initialState = {
  name: '',
  college: '',
  aadhar: '',
  contact: '',
  address: ''
};

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

function AddForm({ onAdd }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(state);
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <div className="shadow-lg m-2 rounded-xl bg-slate-200 p-4 shadow-slate-600">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl text-center mb-4">Registration Form</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Name</label>
            <input
              type="text"
              className="p-2 border w-full rounded-md"
              value={state.name}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value })}
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label>College Name</label>
            <input
              type="text"
              className="p-2 border w-full rounded-md"
              value={state.college}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'college', value: e.target.value })}
              placeholder="Enter your college name"
            />
          </div>
          <div>
            <label>Aadhar No</label>
            <input
              type="text"
              className="p-2 border w-full rounded-md"
              value={state.aadhar}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'aadhar', value: e.target.value })}
              placeholder="Enter your Aadhar number"
            />
          </div>
          <div>
            <label>Contact No</label>
            <input
              type="text"
              className="p-2 border w-full rounded-md"
              value={state.contact}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'contact', value: e.target.value })}
              placeholder="Enter your contact number"
            />
          </div>
          <div className="col-span-2">
            <label>Address</label>
            <input
              type="text"
              className="p-2 border w-full rounded-md"
              value={state.address}
              onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'address', value: e.target.value })}
              placeholder="Enter your address"
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-400 text-black p-2 mt-4 rounded-lg hover:bg-teal-200">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddForm;
