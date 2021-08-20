import axios from "axios"
import { useForm } from "../utils/hooks/useForm"

export default function Registration() {
  const [values, setValues] = useForm({
    firstName: "",
    lastName: "",
    teamName: "",
    email: "",
    note: "",
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    // TODO: reset input state on submit
    axios
      .post("/api/register", values)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log(res)
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }

  return (
    <div className="w-full space-y-8 max-w-7xl mx-auto pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register here!
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={setValues}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={setValues}
                    autoComplete="family-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={setValues}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="teamName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Team Name
                </label>
                <div className="mt-1">
                  <input
                    id="teamName"
                    type="text"
                    name="teamName"
                    value={values.teamName}
                    onChange={setValues}
                    autoComplete="teamName"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="note"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Notes
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="note"
                        name="note"
                        value={values.note}
                        onChange={setValues}
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      If there's anything you would like to let us know. Please
                      specify.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            value="Register"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}
