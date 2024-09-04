import axios from "axios";

const baseUrl = 'http://localhost:5001/api';

export async function downloadStem(trackId: string, stemId: string): Promise<Blob> {
  const response = await axios.get(`${baseUrl}/track/${trackId}/stem/${stemId}`, {
    responseType: 'blob'
  });
  return response.data;
}

export async function downloadMix(trackId: string, mixId: string): Promise<Blob> {
  const response = await axios.get(`${baseUrl}/track/${trackId}/mix/${mixId}`, {
    responseType: 'blob'
  });
  return response.data;
}