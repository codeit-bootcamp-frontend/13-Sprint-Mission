//itemApi.js
const BASE_URL = process.env.REACT_APP_BASE_URL;

// export async function getProducts(params = {}) {
//   // URLSearchParams을 이용하면 파라미터 값을 자동으로 쉽게 인코딩할 수 있어요.
//   const query = new URLSearchParams(params).toString();

//   try {
//     const response = await fetch(`${BASE_URL}/products?${query}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const body = await response.json();
//     return body;
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//     throw error;
//   }
// }

export async function getProducts({ page, pageSize, orderBy, keyword }) {
  const queryParams = new URLSearchParams({
    page,
    pageSize,
    orderBy,
  });

  if (keyword) {
    queryParams.append("keyword", keyword);
  }

  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${queryParams.toString()}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}
