import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Track } from "../models";

export type ListSongsParams = {
  first?: number;
  filter?: string;
  tempo?: number;
  tempoVariable?: boolean;
  songKey?: string;
};

export function useListTracks(params: ListSongsParams) {
  const { getAccessTokenSilently } = useAuth0();

  const baseUrl = import.meta.env.VITE_API_URL;

  const query = useQuery({
    queryKey: ["tracks", params],
    queryFn: async () => {
      const token = await getAccessTokenSilently();
      const response = await axios.get<Track[]>(`${baseUrl}/tracks`, {
        params,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status !== 200) {
        throw new Error("Failed to fetch tracks");
      }
      return response.data;
    },
  });

  return { ...query };
}
