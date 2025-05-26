import axios from "axios";
import * as cheerio from "cheerio";

const extractData = (html: string) => {
  const $ = cheerio.load(html);

  const extractedData: { [key: string]: string }[] = [];

  $(".datatable tbody tr").each((index, element) => {
    const columns = $(element).find("td");

    // Extract text from each column and push to our data array
    extractedData.push({
      cityName: $(columns[0]).text().trim(),
      airportName: $(columns[1]).text().trim(),
      iataCode: $(columns[2]).text().trim(),
    });
  });
  return extractedData;
};

export const get_iata_code = async (city: string) => {
  const parsed_city = encodeURIComponent(city);

  const searchUrl = `https://www.iata.org/en/publications/directories/code-search/?airport.search=${parsed_city}`;

  const fetchOptions = {
    method: "get",
    url: searchUrl,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36", // Add a User-Agent header
    },
  };

  try {
    const response = await axios(fetchOptions);

    if (response.statusText != "OK") {
      console.error(
        `Error fetching ${searchUrl}: ${response.status} ${response.statusText}`
      );
      return null; // Return null on error, don't throw.
    }

    const html = await response.data;

    return extractData(html);
    // return html;
  } catch (error: any) {
    if (error.response) {
      console.error(
        `Error fetching ${searchUrl}: ${error.response.status} ${error.response.statusText}`
      );
      return null;
    } else if (error.request) {
      console.log("error", error);
      console.error(`Error fetching ${searchUrl}: No response received`);
      return null;
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error(`Error fetching ${searchUrl}: ${error.message}`);
      return null;
    }
  }
};
