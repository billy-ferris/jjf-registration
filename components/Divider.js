const Divider = ({ text }) => (
  <div className="relative mt-8 mb-6">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300" />
    </div>
    <div className="relative flex justify-center">
      <span className="px-2 bg-gray-50 text-sm text-gray-500">{text}</span>
    </div>
  </div>
)

export default Divider
