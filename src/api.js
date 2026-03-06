
export default async function getVans() {
  const res = await fetch("/api/vans");
  if (!res.ok) {
    throw new Error(`Failed to fetch vans: ${res.status}`);
  }
  const data = await res.json();
  return data.vans;
}