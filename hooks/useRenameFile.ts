export const renameFile = (file: File) => {
  const extension = file.name.split(".").pop();
  return new File([file], `upload_${Date.now()}.${extension}`, {
    type: file.type,
  });
};
