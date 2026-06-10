import { useReducer } from 'react';

const initialForm = {
  name: '',
  email: '',
  street: '',
  city: '',
};

const initialState = {
  step: 0,
  data: initialForm,
};

function wizardReducer(state, action) {
  switch (action.type) {
    case 'NEXT':
      return { ...state, step: state.step + 1 };
    case 'PREV':
      return { ...state, step: state.step - 1 };
    case 'UPDATE_FIELD':
      return {
        ...state,
        data: { ...state.data, [action.payload.field]: action.payload.value },
      };
    case 'SUBMIT':
      alert('Submitted: ' + JSON.stringify(state.data));
      return initialState; // reset
    default:
      return state;
  }
}

function WizardForm() {
  const [state, dispatch] = useReducer(wizardReducer, initialState);
  const { step, data } = state;

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      payload: { field: e.target.name, value: e.target.value },
    });
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Step {step + 1} of 3</h2>
      {step === 0 && (
        <div>
          <input name="name" value={data.name} onChange={handleChange} placeholder="Name" />
          <input name="email" value={data.email} onChange={handleChange} placeholder="Email" />
        </div>
      )}
      {step === 1 && (
        <div>
          <input name="street" value={data.street} onChange={handleChange} placeholder="Street" />
          <input name="city" value={data.city} onChange={handleChange} placeholder="City" />
        </div>
      )}
      {step === 2 && (
        <div>
          <p>Review your info:</p>
          <p>{data.name} ({data.email})</p>
          <p>{data.street}, {data.city}</p>
        </div>
      )}
      <div style={{ marginTop: 20 }}>
        {step > 0 && <button onClick={() => dispatch({ type: 'PREV' })}>Previous</button>}
        {step < 2 ? (
          <button onClick={() => dispatch({ type: 'NEXT' })}>Next</button>
        ) : (
          <button onClick={() => dispatch({ type: 'SUBMIT' })}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default WizardForm;