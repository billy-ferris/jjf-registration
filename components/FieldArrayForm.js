import { Formik, Form, Field, FieldArray } from "formik"
import * as yup from "yup"
import { generate } from "shortid"

import Input from "./Input"
import AddPlayerButton from "./AddPlayerButton"

const validationSchema = yup.object().shape({
  people: yup.array().of(
    yup.object().shape({
      firstName: yup.string().max(10),
      lastName: yup.string().min(2),
      email: yup.string().email("Not a valid email"),
    })
  ),
})

const ArrayForm = () => (
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
    <div className="space-y-8 divide-y divide-gray-200">
      <div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Lorem Ipsum
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
    <Formik
      initialValues={{
        people: [],
      }}
      onSubmit={() => {}}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Form>
          <FieldArray name="people">
            {({ push, remove }) => (
              <div>
                {values.people.map((p, index) => (
                  <div
                    className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
                    key={p.id}
                  >
                    <Field
                      label="First Name"
                      name={`people[${index}].firstName`}
                      component={Input}
                      type="text"
                      colSpan="3"
                      required
                    />
                    <Field
                      label="Last Name"
                      name={`people[${index}].lastName`}
                      component={Input}
                      type="text"
                      colSpan="3"
                      required
                    />
                    <Field
                      label="Email address"
                      name={`people[${index}].email`}
                      component={Input}
                      type="text"
                      required
                    />
                    <div
                      role="button"
                      tabIndex={0}
                      aria-hidden="true"
                      onClick={() => remove(index)}
                    >
                      x
                    </div>
                  </div>
                ))}
                <AddPlayerButton
                  onClick={() =>
                    push({ id: generate(), firstName: "", lastName: "" })
                  }
                />
              </div>
            )}
          </FieldArray>
          <div className="mt-8">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              value="Register"
            >
              Register
            </button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  </div>
)

export default ArrayForm
