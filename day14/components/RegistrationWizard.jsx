import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { accountSchema, personalSchema, addressSchema, fullSchema } from '../schemas/registrationSchema';

const steps = ['Personal Info', 'Address', 'Review'];

function RegistrationWizard() {
  const [step, setStep] = useState(0);

  const getSchema = () => {
    if (step === 0) return accountSchema;
    if (step === 1) return personalSchema;
    if (step === 2) return addressSchema;
    return fullSchema; // final step validates everything
  };

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(getSchema()),
    mode: 'onTouched', // validate on blur, not every keystroke
  });

  const formData = watch(); // live object of all fields

  const handleNext = async () => {
    const isValid = await trigger(); // validate current step fields
    if (isValid) setStep((s) => s + 1);
  };

  const onSubmit = (data) => {
    console.log('Final submission:', data);
    alert(`Registered ${data.firstName} ${data.lastName}!`);
  };

  const inputClass = 'w-full border p-2 rounded mt-1 dark:bg-gray-700 dark:border-gray-600';
  const errorClass = 'text-red-500 text-sm mt-1';


  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
      {/* Step indicator */}
      <div className="flex justify-between mb-8">
        {steps.map((s, i) => (
          <div
            key={s}
            className={`flex-1 text-center py-2 border-b-2 ${
              i <= step ? 'border-blue-500 text-blue-600' : 'border-gray-300 dark:border-gray-600'
            }`}
          >
            {s}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Step 0: Personal */}
        {step === 0 && (
          <>
            <h3 className="text-xl font-bold">Personal Info</h3>
            <div>
              <label className="text-sm font-medium">First Name</label>
              <input {...register('firstName')} className={inputClass} />
              {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">Last Name</label>
              <input {...register('lastName')} className={inputClass} />
              {errors.lastName && <p className={errorClass}>{errors.lastName.message}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" {...register('email')} className={inputClass} />
              {errors.email && <p className={errorClass}>{errors.email.message}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">Phone (10 digits)</label>
              <input {...register('phone')} className={inputClass} />
              {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
            </div>
          </>
        )}

        {/* Step 1: Address */}
        {step === 1 && (
          <>
            <h3 className="text-xl font-bold">Address</h3>
            <div>
              <label className="text-sm font-medium">Street</label>
              <input {...register('street')} className={inputClass} />
              {errors.street && <p className={errorClass}>{errors.street.message}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">City</label>
              <input {...register('city')} className={inputClass} />
              {errors.city && <p className={errorClass}>{errors.city.message}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">ZIP (5 digits)</label>
              <input {...register('zip')} className={inputClass} />
              {errors.zip && <p className={errorClass}>{errors.zip.message}</p>}
            </div>
          </>
        )}

        {/* Step 2: Review */}
        {step === 2 && (
          <div>
            <h3 className="text-xl font-bold">Review Your Info</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded space-y-2 mt-4">
              <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Address:</strong> {formData.street}, {formData.city} {formData.zip}</p>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between pt-4">
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 py-2 px-6 rounded"
            >
              Previous
            </button>
          )}
          {step < 2 ? (
            <button
              type="button"
              onClick={handleNext}
              className="ml-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="ml-auto bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded font-bold"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}


export default RegistrationWizard;