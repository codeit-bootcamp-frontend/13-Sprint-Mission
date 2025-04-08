import { headers } from "next/headers";
import instance from "./api";

export async function uploadImage(image: File) {
  const formData = new FormData();
  formData.append("image", image);

  const res = await instance.post(`/images/upload`, formData, {
    headers: { " Content-Type": "multipart/form-data" },
  });
  return res.data.url;
}
