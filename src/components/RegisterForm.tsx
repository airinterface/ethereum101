import React, { useState, useEffect } from 'react';
import { useContractContext, type IssuerData } from '@/context/ContractContext'
// Define the states
enum FormState {
  Idle,
  Submitting,
  Success
}

// Define the component
const FormComponent: React.FC = () => {
  const [formState, setFormState] = useState<FormState>(FormState.Idle);
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const { state, actions } = useContractContext()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };




  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setFormState(FormState.Submitting);
    setError(null);

    try {
      if( inputValue ) {
        const data: IssuerData = {
          data: inputValue,
          id: "issuerID",
          keys: ["test keys"]
        }
        await actions.writeIssuer( data );
      }
      // Simulate API call
      // If the input is empty, simulate an error
      if (!inputValue.trim()) {
        throw new Error('Input cannot be empty');
      }
    } catch (err: any) {
      setFormState(FormState.Idle);
      setError(err.message || 'Something went wrong');
    }
  };

  useEffect(()=> {
    const {  issuerRegisted, 
              issuerRegistering,
              issuerRegisterError
            } = state;

    if( issuerRegisterError ) {
      console.info("has  error ")
      setFormState( FormState.Idle )
      setError( `${issuerRegisterError}` )
    } else {
      setError(null)
      if( issuerRegisted ) {
        setFormState(FormState.Success);

      } else  if( issuerRegistering ) {
        console.info("registering")
        setFormState( FormState.Submitting )
      } else {
        console.info("not registering")
        setFormState( FormState.Idle )
      }
    } 
  }, [ state])

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Submit Data</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="data" className="block text-gray-700">
              Data:
            </label>
            <input
              id="data"
              type="text"
              value={inputValue}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              disabled={formState === FormState.Submitting}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className={`w-full p-2 rounded text-white ${
              formState === FormState.Submitting
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-700'
            }`}
            disabled={formState === FormState.Submitting}
          >
            {formState === FormState.Idle && 'Submit'}
            {formState === FormState.Submitting && 'Submitting...'}
            {formState === FormState.Success && 'Submitted'}
          </button>
        </form>
        {formState === FormState.Success && (
          <p className="text-green-500 mt-4">Data submitted successfully!</p>
        )}
      </div>
    </div>
  );
};

export default FormComponent;
