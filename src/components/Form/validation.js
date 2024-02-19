
import * as yup from 'yup';

const contactSchema = yup.object().shape({
    fullname: yup.string().required("Fullname is required"),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    message: yup.string().required("Message is required"),
    phone: yup.string().required("Phone number is required"),
    website: yup.string().required("Website is required")
});

export default contactSchema;
