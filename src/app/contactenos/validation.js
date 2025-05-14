import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("El nombre es obligatorio"),
  celular: Yup.string()
    .matches(/^[0-9]+$/, "El número de celular solo debe contener dígitos")
    .min(9, "El número de celular debe tener 9 dígitos")
    .required("El número de celular es obligatorio"),
  email: Yup.string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es obligatorio"),
  asunto: Yup.string()
    .min(3, "El asunto debe tener al menos 3 caracteres")
    .required("El asunto es obligatorio"),
  mensaje: Yup.string()
    .min(3, "El mensaje debe tener al menos 10 caracteres")
    .required("El mensaje es obligatorio"),
});

export { validationSchema };
