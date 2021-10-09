
/**
 * 
 * @param path image location
 * @returns full URL for image files
 */
export const getStaticImageUrl = (path: string) => {
  const root = process.env.PUBLIC_URL;
  return `${root}${path}`;
};
