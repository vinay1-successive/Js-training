const validateValue = (value) => {
  if (value && typeof value != "number") {
    return false;
  }
  return true;
};

export default validateValue;
 