import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Must be minimum 3 characters")
    .required("Name is required"),
  surname: yup
    .string()
    .min(3, "Must be minimum 3 characters")
    .required("Surname is required"),
  email: yup
    .string()
    .min(3, "Must be minimum 3 characters")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Invalid email address, should something like: correct@test.com",
    )
    .required("Email is required"),
  postalCode: yup
    .string()
    .length(6)
    .required("Postal code is required")
    .matches(/^\d{2}-\d{3}$/, "Invalid postal code"),
  city: yup
    .string()
    .min(3, "Must be minimum 3 characters")
    .required("City is required"),
  street: yup
    .string()
    .min(3, "Must be minimum 3 characters")
    .required("Street is required"),
  houseNumber: yup
    .string()
    .min(1, "Must be minimum 1 character")
    .required("House number is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{9}/)
    .length(9)
    .required("Phone number is required"),
});
