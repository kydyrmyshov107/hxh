import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getCharacters: build.query({
   query:() => ({}),
   providesTags:['api']
    }),
      }),
});

export const { useGetCharactersQuery } = api;
