export const fetcher = (url) => fetch(url).then((res) => res.json());

export const fetchPostById = async (id) => {
  if (!id) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    return res.json();
  }
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
};
