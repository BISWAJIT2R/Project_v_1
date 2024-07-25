
import { ErrorMessage } from "@hookform/error-message";
const FormError = ({errors, name}) => {

  return (
    <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) =>  <p className=" text-sm font-sans text-red-500 my-2">{message}</p>}
      />
  )
}

export default FormError;
