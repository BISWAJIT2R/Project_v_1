import { useState } from "react";
import Button from "./Button";
import CabinForm from "./CabinForm";
const FormRow = ({
  id,
  name,
  image,
  isAvailable,
  maxCapacity,
  price,
  discount,
  isDeleting,
  mutate,
  discription
}) => {
  const [showEdit, setShowEdit] = useState(false);
  // console.log(id);
  return (
    <div>
      <div
        key={id}
        className=" h-[70px] w-full relative grid grid-cols-9  items-center text-white scrollbar-hide "
      >
        <h3 className="flex items-center justify-center relative font-bold">
          {id}
        </h3>

        <h2 className="flex items-center justify-center relative font-bold">
          {name}
        </h2>
        <img
          src={image}
          alt="NOT FOUND"
          className="h-full w-full relative object-cover"
        />
        <p
          className={`${
            isAvailable ? "bg-green-400" : "bg-red-500"
          } h-1/2 w-1/2 rounded-full relative ml-7`}
        ></p>
        <h3 className="flex items-center justify-center relative font-bold">
          {maxCapacity}
        </h3>
        <h3 className="flex items-center justify-center relative font-bold">
          {price}
        </h3>
        <h3 className="flex items-center justify-center relative font-bold">
          {discount}
        </h3>

        <Button
          Text={"Delete"}
          customClass="bg-red-500 hover:bg-red-700 w-[70%]"
          onlick={() => mutate(id)}
          disable={isDeleting}
        />

        <Button
          Text={"Edit"}
          customClass="bg-green-500 hover:bg-green-700 w-[70%]"
          onlick={() => setShowEdit((show) => !show)}
        />
      </div>

      {showEdit && (
        <CabinForm
         CabinTOEdit={
          {
            id,
            name,
            image,
            isAvailable,
            maxCapacity,
            price,
            discount,
            discription
          }
        }
        />
      )}
    </div>
  );
};

export default FormRow;
