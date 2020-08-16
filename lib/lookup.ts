import axios from "axios";

interface BookInfo {
  title: string;
  author: string;
  year: string;
}

function extractBookInfo(response): BookInfo {
  if (response.data && response.data.items) {
    let volume = response.data.items[0].volumeInfo;
    return {
      title: volume.title,
      author: volume.authors[0],
      year: new Date(volume.publishedDate).getFullYear().toString(),
    };
  }
}

export async function searchQuote(quote: string): Promise<BookInfo> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  if (quote && quote.length >= 8) {
    console.log(`Looking up quote: ${quote}`);
    return axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${quote}`)
      .then((response) => {
        return extractBookInfo(response);
      });
  } else {
    return Promise.reject(null);
  }
}
