const FormHeader = ({ title, text }) => (
  <>
    <div>
      <img className="mx-auto h-16 w-auto" src="/jj-logo.svg" alt="Workflow" />
    </div>
    <div className="text-center">
      <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{text}</p>
    </div>
  </>
)

export default FormHeader
