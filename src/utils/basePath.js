// src/utils/basePath.js
const BASE_PATH = import.meta.env.BASE_URL || "/";
export const withBasePath = (path) => `${BASE_PATH}${path.replace(/^\//, "")}`;
