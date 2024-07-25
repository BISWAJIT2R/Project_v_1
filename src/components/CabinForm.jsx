import { useForm } from "react-hook-form";

import { useMutateCabins } from "../services/Query/Application";
import Button from "./Button";
import FormError from "./FormError";

const CabinForm = ({ CabinTOEdit = {} }) => {
  
  const { id: editID, ...editValues } = CabinTOEdit;

  const isEditing = Boolean(editID);
  const {
    discount,
    image,
    isAvailable,
    maxCapacity,
    name,
    price,
    discription,
  } = editValues;

  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: isEditing
      ? {
          name,
          maxCapacity,
          isAvailable,
          price,
          discount,
          discription,
          image,
        }
      : {
          name: "",
          maxCapacity: 0,
          isAvailable: true,
          price: 0,
          discount: 0,
          discription: "",
          image: "",
        },
  });

  const { isPending, mutate } = useMutateCabins();

  const onSubmit = (data) => {
    const newData = {
      ...data,
      image: typeof data.image === "object" ? data.image[0] : data.image,
    };

    mutate({ id: editID, ...newData });
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full max-w-2xl mx-auto p-4 shadow-md rounded-md bg-white overflow-y-scroll  scrollbar-hide"
      >
        <div className=" mb-1">
          <label
            htmlFor="name"
            className="block text-base font-semibold text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            className="form-input"
            {...register("name", {
              required: "This filed is require to  submit a form",
            })}
            placeholder="Enter Cabins name"
          />
          <FormError errors={errors} name="name" />
        </div>
        <div className=" mb-1">
          <label
            htmlFor="name"
            className="block text-base font-semibold text-gray-700"
          >
            MaxCapacity
          </label>
          <input
            type="number"
            defaultValue={0}
            placeholder="0"
            className="form-input"
            {...register(
              "maxCapacity",
              isEditing
                ? false
                : {
                    required: "This filed is required",
                    min: {
                      value: 1,
                      message: "Value should be a start from 1",
                    },
                    max: {
                      value: 7,
                      message: "Value should be less the 8",
                    },
                  }
            )}
          />
          <FormError errors={errors} name="maxCapacity" />
        </div>
        <div className=" mb-1">
          <label
            htmlFor="name"
            className="block text-base font-semibold text-gray-700"
          >
            IsAvilable
          </label>
          <select
            name="isAvailable"
            className="form-input uppercase"
            {...register(
              "isAvailable",
              isEditing
                ? false
                : {
                    required: "This filed is required!!",
                  }
            )}
            defaultValue={null}
          >
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
          <FormError errors={errors} name="isAvailable" />
        </div>
        <div className=" mb-1">
          <label
            htmlFor="name"
            className="block text-base font-semibold text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            placeholder="Enter price here"
            className="form-input"
            {...register(
              "price",
              isEditing
                ? false
                : {
                    required: "This filed  is required!!",
                    min: {
                      value: 1000,
                      message: "Price should be greater then 1000",
                    },
                    max: {
                      value: 70000,
                      message: "Price should be less then 70000",
                    },
                  }
            )}
          />
          <FormError errors={errors} name="price" />
        </div>
        <div className=" mb-1">
          <label
            htmlFor="name"
            className="block text-base font-semibold text-gray-700"
          >
            Discount
          </label>
          <input
            type="number"
            placeholder="Enter price here"
            className="form-input"
            {...register(
              "discount",
              isEditing
                ? false
                : {
                    required: "This filed is required",
                    min: {
                      value: 0,
                      message: "Value should be positive or 0",
                    },
                    max: {
                      value: getValues().price - 1000,
                      message: "Value should be less  then to the actual price",
                    },
                  }
            )}
          />
          <FormError errors={errors} name="discount" />
        </div>
        <div className=" mb-1">
          <label
            htmlFor="name"
            className="block text-base font-semibold text-gray-700"
          >
            Description
          </label>
          <textarea
            type="number"
            placeholder="Enter Cabins Desciption here"
            className="form-input "
            {...register(
              "discription",
              isEditing
                ? false
                : {
                    required: "This filed is required!!",
                  }
            )}
          />

          <FormError errors={errors} name="discription" />
        </div>
        <div className=" mb-1">
          <label
            htmlFor="name"
            className="block text-base font-semibold text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            className="form-input"
            {...register("image")}
            accept="image/*"
          />
        </div>
        <div className="mt-4 mb-2 bg-red max-w-sm flex gap-3 ml-auto relative justify-end">
          <Button
            Text="Reset"
            customClass="bg-red-400 hover:bg-red-500 text-slate-100 hover:text-black sm:w-20"
          />
          <Button
            Text={`${isEditing ? "Edit" : "Submit"}`}
            customClass="bg-green-500 hover:bg-green-600 text-slate-100 hover:text-black sm:w-20"
            disable={isPending}
          />
        </div>
      </form>
    </>
  );
};

export default CabinForm;
