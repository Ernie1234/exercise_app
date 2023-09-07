export const ytOption = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "051c5e25a3msh04fb39deac0249ap1c8b03jsne26e8a954562",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const apiOption = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "051c5e25a3msh04fb39deac0249ap1c8b03jsne26e8a954562",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const dataFetchFn = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
