import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { saveAs } from "file-saver";
import { TrackItem } from "../models";
import { useState } from "react";

async function downloadTrackItem(trackId: string, item: TrackItem, filename: string, token: string) {
  const baseUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await axios.get(`${baseUrl}/track/${trackId}/${item.type}/${item.id}/download`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: 'blob'
    });
    saveAs(response.data, filename);
  } catch (error) {
    console.error(`Error downloading ${item}`, error);
  }
}

export function useDownloadTrackItem() {
  const { getAccessTokenSilently } = useAuth0();
  const [isDownloading, setIsDownloading] = useState(false)

  const download = async (trackId: string, item: TrackItem, filename: string) => {
    setIsDownloading(true);
    const token = await getAccessTokenSilently();
    const response = await downloadTrackItem(trackId, item, filename, token);
    setIsDownloading(false);
    return response;
  }
  return { download, isDownloading };
}