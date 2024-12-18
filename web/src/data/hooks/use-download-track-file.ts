import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { saveAs } from "file-saver";
import { TrackFile } from "../models";
import { useState } from "react";

async function downloadTrackFile(trackSlug: string, file: TrackFile, filename: string, token: string) {
  const baseUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await axios.get(`${baseUrl}/track/${trackSlug}/${file.slug}/download`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: 'blob'
    });
    saveAs(response.data, filename);
  } catch (error) {
    console.error(`Error downloading ${file}`, error);
  }
}

export function useDownloadTrackFile() {
  const { getAccessTokenSilently } = useAuth0();
  const [isDownloading, setIsDownloading] = useState(false)

  const download = async (trackSlug: string, file: TrackFile, filename: string) => {
    console.debug(trackSlug, file, filename);
    setIsDownloading(true);
    const token = await getAccessTokenSilently();
    const response = await downloadTrackFile(trackSlug, file, filename, token);
    setIsDownloading(false);
    return response;
  }
  return { download, isDownloading };
}