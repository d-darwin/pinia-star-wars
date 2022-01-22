import Film from "@/api/models/film";

export async function fetchFilmList(urlList: string[]): Promise<Film[]> {
  let list: Film[] = [];

  if (urlList.length) {
    list = await Promise.all(
      urlList.map((url) => fetch(url).then((res) => res.json()))
    );
  }

  return list;
}
