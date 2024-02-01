

export const fetchDataFromApi = async (searchUrl) => {
    const BASE_URL ='https://api.tvmaze.com';
		const url = `${BASE_URL}/${searchUrl}`;
    // https://api.tvmaze.com/shows/42181
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network Error');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
	};