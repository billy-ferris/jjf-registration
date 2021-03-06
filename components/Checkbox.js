const Checkbox = ({ field, label, colSpan = "1" }) => (
  <div className={`col-span-${colSpan}`}>
    <div className="flex items-center">
      <input
        {...field}
        type="checkbox"
        className="h-4 w-4 text-indigo-600 transition duration-200 ease-in-out focus:ring-indigo-500 border-gray-300 rounded"
      />
      <label htmlFor={field.name} className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </div>
  </div>
)

export default Checkbox
