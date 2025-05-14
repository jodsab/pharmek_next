import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("El nombre es obligatorio"),
  celular: Yup.string()
    .matches(/^[0-9]+$/, "El número de celular solo debe contener dígitos")
    .min(9, "El número de celular debe tener 9 dígitos")
    .required("El número de celular es obligatorio"),
  email: Yup.string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es obligatorio"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .required("La contraseña es obligatoria"),
  rePassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("La confirmación de la contraseña es obligatoria"),
});

export { validationSchema };
