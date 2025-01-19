export const isValidAddItem = (values) => {
  const isValid = values.name.trim() && values.description.trim() && values.price > 0 && values.tags.length > 0;

  return isValid;
};
