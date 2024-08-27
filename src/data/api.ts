import axios from "axios";

const baseUrl = 'http://localhost:5000/rest';

export type Song = {
  Id: string;
  Artist: string;
  Title: string;
}

export async function test(): Promise<any> {
  const response = await axios.get(`/api/test`);
  return response.data;
}

export async function listSongs(filter?: string): Promise<Song[]> {
  const response = await axios.get<{ value: Song[] }>(`${baseUrl}/Song`,
    {
      params: {
        $filter: filter ? `contains(Title,'${filter}') or contains(Artist,'${filter}')` : null,
        $orderby: 'Artist',
      }
    }
  );

  return response.data.value;
}

export async function getSongById(id: string) {
  const response = await fetch(`${baseUrl}/Song/Id/${id}`);
  return await response.json();
}

export async function listMixes(songId: string) {
  const response = await fetch(`${baseUrl}/Mix?$filter=SongId eq ` + songId);
  return await response.json();
}

export async function listStems(songId: string) {
  const response = await fetch(`${baseUrl}/Stem?$filter=SongId eq ` + songId);
  return await response.json();
}

// function buildQueryParams(params: IApiParams): string {
//   const searchParams = new URLSearchParams();
//   for (const [key, value] of Object.entries(params)) {
//     if (value !== undefined && value !== null) {
//       searchParams.append(`$${key}`, value.toString());
//     }
//   }
//   return searchParams.toString();
// }

// function extractAfterParam(nextLink: string): string | null {
//   if (!nextLink) return null;
//   const url = new URL(nextLink);
//   return url.searchParams.get('$after');
// }