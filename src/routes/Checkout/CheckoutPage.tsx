import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { TextField, Button, Stack } from "@mui/material";

import { validationSchema } from "./ValidationFormSchema";
import SummaryCart from "../Cart/SummaryCart";

<<<<<<< HEAD
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { ROUTES } from "../../utils/routes";
=======
import { useAppDispatch } from "../../store/hooks";
import { ROUTES } from "../../utils/routes";
import { clearCart } from "../../store/reducers/cartSlice";
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
<<<<<<< HEAD
  const cart = useAppSelector((state) => state.cartSlice.cart);
  if (!cart) return null;
=======
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb

  const checkoutHandle = () => {
    navigate(ROUTES.CART);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      postalCode: "",
      city: "",
      street: "",
      houseNumber: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      formik.resetForm();
      navigate(ROUTES.HOMEPAGE);
<<<<<<< HEAD
      dispatch({ type: "cart/clearCart" });
=======
      dispatch(clearCart());
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
    },
  });

  const postalCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (value.length === 2) {
      value += "-";
    }
    if (value.length === 7) return;

    formik.setFieldValue("postalCode", value);
  };

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
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            fullWidth
            id="postalCode"
            name="postalCode"
            label="Postal Code"
            type="text"
            value={formik.values.postalCode}
            onChange={postalCodeChange}
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

<<<<<<< HEAD
      <SummaryCart
        finalData={cart}
        text="Check Cart"
        onClick={checkoutHandle}
      />
=======
      <SummaryCart text="Check Cart" onClick={checkoutHandle} />
>>>>>>> 85cdc32feb2d1570b9fc2de74fd7df5d7951ddbb
    </section>
  );
};

export default CheckoutPage;
