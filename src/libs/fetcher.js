export async function fetcher(input) {
  const res = await fetch(input);
  if (res.ok) {
    return await res.json();
  }
  return Promise.reject("Some error");
}
