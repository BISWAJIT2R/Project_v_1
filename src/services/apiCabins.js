import supabase from "./supabase";

export const getCabins = async () => {
  let { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) throw new Error({ msg: "You have a problem bro !" });

  return cabins;
};

export const deleteCabins = async (id) => {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (!error) return {msg: `${id} Row Deleted!!`}
};
