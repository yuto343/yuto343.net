export const useConstants = (obj, prefix = "") => {
  let result = {};
  let resultKey = prefix;
  for (const [key, value] of Object.entries(obj)) {
    resultKey = prefix ? `${prefix}_${key}` : key;
    if (value !== null && typeof value === "object") {
      Object.assign(result, useConstants(value, resultKey));
    } else {
      result[resultKey] = value;
    }
  }
  return result;
};
