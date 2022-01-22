import { BASE_URL, STARSHIP_LIST_ENDPOINT } from "@/api/config";
import Starship from "@/api/models/starship";

export async function fetchStarshipList(): Promise<Starship[]> {
  const response = await fetch(BASE_URL + STARSHIP_LIST_ENDPOINT).then((res) =>
    res.json()
  );

  return response?.results || [];
}
