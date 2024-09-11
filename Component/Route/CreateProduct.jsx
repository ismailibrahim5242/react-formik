import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const CreateProduct = () => {
  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      Description: "",
      image: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object({
      productName: yup.string().required("Its require,pls fill am"),
      productPrice: yup.number().required("Its require,pls fill am"),
      Description: yup.string().required("Its require,pls fill am"),
      image: yup.string().required("Its require,pls fill am"),
    }),
  });
  console.log(formik.values);

  return (
    <>
      <h1>CreateProduct</h1>

      <form action="" onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Product Name"
            onChange={formik.handleChange}
            name="productName"
            onBlur={formik.handleBlur}
          />
          <small>
            {formik.touched.productName && formik.errors.productName}
          </small>
        </div>

        <div>
          <input
            type="number"
            placeholder="Product price"
            onChange={formik.handleChange}
            name="productPrice"
            onBlur={formik.handleBlur}
          />
          <small>
            {formik.touched.productPrice && formik.errors.productPrice}
          </small>
        </div>

        <div>
          <input
            type="text"
            placeholder="Description"
            onChange={formik.handleChange}
            name="Description"
            onBlur={formik.handleBlur}
          />
          <small>{formik.touched.Description && formik.errors.Description}</small>
        </div>

        <div>
          <input
            type="text"
            placeholder="Image"
            onChange={formik.handleChange}
            name="image"
            onBlur={formik.handleBlur}
          />
          <small>{formik.touched.image && formik.errors.image}</small>
        </div>

        <button type="submit">Save Product</button>
      </form>
    </>
  );
};

export default CreateProduct;
