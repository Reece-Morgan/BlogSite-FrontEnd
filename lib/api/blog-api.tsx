export const callApiRoute = async (endpoint: string, param?: string) => {
  const headers = new Headers();
  headers.append("id", param || "");

  const res = fetch(`/api/${endpoint}`, {
    headers: headers,
  });

  const response = (await res).json();

  return response;
};

export const callApiRouteForCreation = async (
  endpoint: string,
  title: string,
  content: string,
  username: string
) => {
  const headers = new Headers();
  headers.append("title", title);
  headers.append("content", content);
  headers.append("username", username);

  const res = fetch(`/api/${endpoint}`, {
    headers: headers,
  });

  const response = (await res).json();

  return response;
};

export const getAllBlogItems = async () => {
  const data = await fetch("http://localhost:5189/api/blog/get-all");

  const response = await data.json();

  return response;
};

export const createBlogItem = async (
  title: string,
  content: string,
  username: string
) => {
  const data = await fetch("http://localhost:5189/api/blog/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      content,
      author: username,
      dateCreated: new Date(),
      readLength: 2,
    }),
  });

  const response = await data.json();

  return response;
};

export const deleteBlogItem = async (id: number) => {
  const data = await fetch(`http://localhost:5189/api/blog/delete/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  const response = await data.json();

  return response;
};
