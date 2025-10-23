import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  Nombre: Yup.string()
    .min(2, 'Muy corto')
    .max(50, 'Muy largo')
    .required('El nombre es un campo requerido'),
  Apellido: Yup.string()
    .min(2, 'Muy corto')
    .max(50, 'Muy largo')
    .required('El apellido es un campo requerido'),
  Edad: Yup.number()
    .min(14, 'Necesitas tener al menos 14 años')
    .max(99, 'Es probable que necesites ayuda para contactarnos')
    .required('La edad es un campo requerido'),
  Email: Yup.string().email('El email no es válido').required('El email es un campo requerido'),
  Phone: Yup.number()
    .min(900000000, 'Ingresa un numero válido')
    .max(999999999, 'Ingresa un numero válido')
    .required('El número de teléfono debe tener exactamente 9 cifras'),
  Ocupation: Yup.string(),
  Asunto: Yup.string().min(2, 'Muy corto').max(50, 'Muy largo').required('Ingresa el asunto')
})

export default SignupSchema
