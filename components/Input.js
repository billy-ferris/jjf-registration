import { getIn } from "formik"

const Input = ({
  field,
  type,
  required,
  label,
  placeholder,
  colSpan = "*",
  form: { errors },
}) => {
  const errorMessage = getIn(errors, field.name)

  return (
    <div className={`col-span-3 sm:col-span-${colSpan}`}>
      <label htmlFor={field.name} className="block text-sm text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          {...field}
          type={type}
          className="shadow-sm transition duration-300 ease-in-out focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          required={required}
          placeholder={placeholder}
        />
        {errorMessage && (
          <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    </div>
  )
}

export default Input
