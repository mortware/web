import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Track } from "../models";
import { slugify } from "@/lib/utils/slugify";

export type ListSongsParams = {
  first?: number;
  filter?: string;
  tempo?: number;
  tempoVariable?: boolean;
  songKey?: string;
};

export function useListTracks(params: ListSongsParams) {
  const { getAccessTokenSilently } = useAuth0();

  // slugify the filter
  if (params.filter) {
    params.filter = slugify(params.filter);
  }

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
      return { tracks: response.data };
    },
  });

  return {
    tracks: query.data?.tracks,
    isLoading: query.isLoading,
    error: query.error
  };
}
