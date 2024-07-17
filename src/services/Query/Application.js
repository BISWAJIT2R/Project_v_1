import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { deleteCabins, getCabins } from "../apiCabins";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        }
    }
});

export const UseFetchCabins = () => {
   const {isPending, data:cabins, error} =  useQuery({
        queryKey: ['cabins'],
        queryFn: getCabins
    })

    // console.log();
    return {isPending, cabins, error}
}

export const UseDeleteCabins = (id) => {
   const {isPending, mutate} =  useMutation({
        mutationFn: (id) =>  deleteCabins(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey:["cabins"],
            })
        }
    })
    return {isPending, mutate}
}