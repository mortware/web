import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TrackDetails } from "../models";

export function useGetTrack(trackSlug: string) {
  const { getAccessTokenSilently } = useAuth0();

  const baseUrl = import.meta.env.VITE_API_URL;

  const query = useQuery({
    queryKey: ["track", trackSlug],
    queryFn: async () => {
      const token = await getAccessTokenSilently();
      const response = await axios.get<TrackDetails>(`${baseUrl}/track/${trackSlug}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status !== 200) {
        throw new Error("Failed to fetch track");
      }

      return response.data;
    },
  });

  return { ...query };
}
