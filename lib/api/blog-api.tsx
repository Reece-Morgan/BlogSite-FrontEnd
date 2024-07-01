export const callApiRoute = async (endpoint: string, param?: string) => {
  const headers = new Headers();
  headers.append("query", param || "");

  const res = fetch(`/api/${endpoint}`, {
    headers: headers,
  });

  const response = (await res).json();

  return response;
};

export const getAllBlogItems = async () => {
  const data = await fetch("http://localhost:5189/api/BlogItems");

  const response = await data.json();

  return response;
};
