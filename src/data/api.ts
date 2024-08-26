// const BASE_URL = "/data-api/rest";
const BASE_URL = "http://localhost:5000/graphql";

export type Song = {
  Id: string;
  Title: string;
  Artist: string;
};

export type OrderByInput = {
  field: string;
  direction: "ASC" | "DESC";
}

export const getSongs = async (after: string | null, first: number = 100, orderBy: OrderByInput = { field: "Title", direction: "ASC" }) => {

  const query = `
    query($after: String, $first: Int) {
      songs(after: ${after ? `"${after}"` : `null`}, first: $first, orderBy: { ${orderBy.field}: ${orderBy.direction} }) {
        items {
          Id
          Title
          Artist
        }
        hasNextPage
        endCursor
      }
    }
  `;

  const variables = {
    after,
    first,
  }

  try {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResponse = await response.json();

    if (!jsonResponse.data) {
      throw new Error("Invalid response");
    }

    console.debug(response);
    return jsonResponse.data.songs.items as Song[];
  }
  catch (error) {
    console.error("Error fetching songs:", error);
    throw error;
  }
}

export const getStems = async () => {

}