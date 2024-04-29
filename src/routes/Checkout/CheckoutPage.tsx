import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import SummaryCart from "../Cart/SummaryCart";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Must be minimum 3 characters")
    .required("Name is required"),
  surname: yup
    .string()
    .min(3, "Must be minimum 3 characters")
    .required("Surname is required"),
  postalCode: yup
    .string()
    .min(5, "Must be 5 characters")
    .max(5, "Must be 5 characters")
    .required("Postal code is required")
    .matches(/^([0-9]{5})*$/, "Invalid postal code"),
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
    .min(9, "Must be 9 characters")
    .max(9, "Must be 9 characters")
    .required("Phone number is required"),
});

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cartSlice.cart);

  const checkoutHandle = () => {
    navigate(ROUTES.CART);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      postalCode: "",
      city: "",
      street: "",
      houseNumber: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      console.log("submit");
      alert(JSON.stringify(values, null, 2));

      formik.resetForm();
      navigate(ROUTES.HOMEPAGE);
      dispatch({ type: "cart/clearCart" });
    },
  });

  return (
    <section className="flex flex-col-reverse items-center gap-8 px-4 py-20 md:flex-row md:justify-between md:px-[5%] lg:gap-0 lg:px-[10%]">
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={4} width={400}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="surname"
            name="surname"
            label="Surname"
            type="text"
            value={formik.values.surname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
          />

          <TextField
            fullWidth
            id="postalCode"
            name="postalCode"
            label="Postal Code"
            type="text"
            value={formik.values.postalCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.postalCode && Boolean(formik.errors.postalCode)
            }
            helperText={formik.touched.postalCode && formik.errors.postalCode}
          />

          <TextField
            fullWidth
            id="city"
            name="city"
            label="City"
            type="text"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />

          <TextField
            fullWidth
            id="street"
            name="street"
            label="Street"
            type="text"
            value={formik.values.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.street && Boolean(formik.errors.street)}
            helperText={formik.touched.street && formik.errors.street}
          />
          <TextField
            fullWidth
            id="houseNumber"
            name="houseNumber"
            label="House number"
            type="text"
            value={formik.values.houseNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.houseNumber && Boolean(formik.errors.houseNumber)
            }
            helperText={formik.touched.houseNumber && formik.errors.houseNumber}
          />
          <TextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number"
            type="text"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
          <Button type="submit" variant="outlined">
            Submit Order
          </Button>
        </Stack>
      </form>

      <SummaryCart
        finalData={cart}
        text="Check Cart"
        onClick={checkoutHandle}
      />
    </section>
  );
};

export default CheckoutPage;
