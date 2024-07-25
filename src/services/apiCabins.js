import supabase from "./supabase";

export const getCabins = async () => {
  let { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) throw new Error({ msg: "You have a problem bro !" });

  return cabins;
};

export const deleteCabins = async (id) => {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (!error) return { msg: `${id} Row Deleted!!` };
};

export const createNewCabin = async (newCabin = {}) => {
  // * ResuseAble part
  // ? for editng upload image
  let { image, id } = newCabin;
  let isEditing = Boolean(id);

  if (typeof image === "object" && isEditing) {
    const { imagepath, imageError } = await uplodImage(image);

    if (imageError) return { msg: "Image not uploaded" };

    newCabin = { ...newCabin, image: imagepath };
    // console.log(newdata);
  }

  if (isEditing) {
    const { data, error } = await supabase
      .from("cabins")
      .update(newCabin)
      .eq("id", id)
      .select();

    if (error) throw new Error("Cabin is not updated!!");
    return data;
  }

  // ! Creating a new cabin 

  const { imagepath, imageError } = await uplodImage(image);
  
  if (imageError) throw new Error("Cabin is not created!! 💀💀💀💀");
  
  const { data,  error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image:  imagepath}]);
  
    if (error) throw new Error("Cabin is not created!! 💀💀💀💀");

    return data;

};



const uplodImage = async (image) => {
  // * Creating fileName

  const fileName = `${Math.random()}-${image.name}`.replaceAll("/", "");

  // ? creating image path
  const imagepath = `${
    import.meta.env.REACT_APP_SUPABSE_URL
  }/storage/v1/object/public/Images/${fileName}`;

  // ! uploading the image in supbase.

  const { error: imageError } = await supabase.storage
    .from("Images")
    .upload(fileName, image);

  if (imageError) {
    console.log(imageError);
  }

  return { imagepath, imageError };
};

