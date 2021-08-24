import { useState } from "react"
import axios from "axios"
import { Formik, Form, Field, FieldArray } from "formik"
import * as yup from "yup"
import { generate } from "shortid"

import Input from "./Input"
import Checkbox from "./Checkbox"
import Divider from "./Divider"
import XIcon from "./XIcon"
import EmptyTeamState from "./EmptyTeamState"
import AddMemberButton from "./AddMemberButton"
import SuccessModal from "./SuccessModal"
import FormHeader from "./FormHeader"

const validationSchema = yup.object().shape({
  members: yup.array().of(
    yup.object().shape({
      name: yup.string(),
      email: yup.string().email("Not a valid email"),
      isCaptain: yup.boolean(),
      phone: yup.string(),
    })
  ),
  team: yup.string(),
})

const RegisterForm = () => {
  const [isOpen, setOpen] = useState(true)

  return (
    <>
      <SuccessModal isOpen={isOpen} setOpen={setOpen} />
      <div className="w-full space-y-6 max-w-2xl mx-auto pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <FormHeader
          title="Register your team"
          text="Please provide your team name and team members information."
        />
        <Formik
          initialValues={{
            members: [],
            team: "",
          }}
          onSubmit={async (values, { resetForm }) => {
            axios
              .post("/api/register", values)
              .then(async (res) => {
                if (res.status === 200) {
                  await setOpen(true)
                  resetForm()
                }
                console.log(res)
              })
              .catch((error) => {
                // eslint-disable-next-line no-alert
                alert("Something went wrong. Please try again later.")
                // eslint-disable-next-line no-console
                console.log(error)
              })
          }}
          validationSchema={validationSchema}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <Field
                label="Team name"
                name="team"
                component={Input}
                type="text"
                required
              />
              {values.members.length > 0 && <Divider text="Team member(s)" />}
              <FieldArray name="members">
                {({ push, remove }) => (
                  <div className="relative">
                    <div>
                      {values.members.map((p, index) => (
                        <div
                          key={p.id}
                          className="relative grid grid-cols-1 gap-y-4 gap-x-4 my-4 sm:grid-cols-6 first:border-none bg-white shadow px-4 py-6 sm:px-6 rounded-md"
                        >
                          <div className="absolute top-0 right-0 pt-3 pr-3">
                            <XIcon
                              width="4"
                              height="4"
                              onClick={() => remove(index)}
                            />
                          </div>
                          <Field
                            label="Full name"
                            name={`members[${index}].name`}
                            component={Input}
                            type="text"
                            colSpan="3"
                            required
                          />
                          <Field
                            label="Email address"
                            name={`members[${index}].email`}
                            component={Input}
                            colSpan="3"
                            type="text"
                            required
                          />
                          <Field
                            name={`members[${index}].isCaptain`}
                            label="Team Captain"
                            component={Checkbox}
                            colSpan="3"
                          />
                          {values.members[index].isCaptain === true && (
                            <Field
                              label="Phone number"
                              name={`members[${index}].phone`}
                              component={Input}
                              colSpan="3"
                              type="text"
                              placeholder="(123) 456-7890"
                              required
                            />
                          )}
                        </div>
                      ))}
                      {values.members.length > 0 ? (
                        <AddMemberButton
                          onClick={() =>
                            push({
                              id: generate(),
                              name: "",
                              email: "",
                              isCaptain: false,
                              phone: "",
                            })
                          }
                        />
                      ) : (
                        <EmptyTeamState
                          onClick={() =>
                            push({
                              id: generate(),
                              name: "",
                              email: "",
                              isCaptain: false,
                              phone: "",
                            })
                          }
                        />
                      )}
                      {values.members.length > 0 && (
                        <div className="mt-10">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 transition duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                          >
                            Register team
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </FieldArray>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default RegisterForm
