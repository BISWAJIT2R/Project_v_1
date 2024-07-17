// import { getCabins } from "../services/apiCabins";
import Container from "../components/Container";
import Loader from "../components/Loader";
import Button from "../components/Button";
import Column from "../components/Column";
import { UseDeleteCabins, UseFetchCabins } from "../services/Query/Application";

const Bookings = () => {
  const { cabins = [], isPending, error } = UseFetchCabins();
 const {isPending: isDeleting, mutate} = UseDeleteCabins()
  {
    if (isPending) {
      return <Loader />;
    }
  }

  return (
    <Container>
      <header className="flex-between  py-3"><h1 className="font-base">All Cabins</h1>
      <h3 className="">Sort/Fliter</h3></header>
      <div className="cabins">
        <Column />
        <div className="h-[90%] w-full  flex flex-col gap-2  relative overflow-hidden">
          {cabins.map(
            ({
              id,
              discount,
              discription,
              image,
              isAvailable,
              maxCapacity,
              name,
              price,
            }) => (
              <div
                key={id}
                className="h-[10%] w-full relative grid grid-cols-7  items-center text-white bg-black overflow-scroll"
              >
                
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
                <div className="flex items-center gap-2">
                  <Button Text={"Delete"} customClass="bg-red-500 hover:bg-red-700" onlick={() => mutate(id)} disable={isDeleting}/>
                  {/* <Button Text={"Delete"} customClass="bg-red-500 hover:bg-red-700"/> */}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Container>
  );
};

export default Bookings;
