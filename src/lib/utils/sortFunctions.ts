export const sortByDate = (array: any[]): any[] => {
  const sortedArray = array.sort(
    (a, b) =>
      new Date(b.frontmatter.date && b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date && a.frontmatter.date).getTime()
  );
  return sortedArray;
};

// sort product by weight
export const sortByWeight = (array: any[]): any[] => {
  const withWeight = array.filter((item) => item.frontmatter.weight);
  const withoutWeight = array.filter((item) => !item.frontmatter.weight);
  const sortedWeightedArray = withWeight.sort(
    (a, b) => a.frontmatter.weight - b.frontmatter.weight
  );
  const sortedArray = [
    ...new Set<[any, any]>([...sortedWeightedArray, ...withoutWeight]),
  ];

  return sortedArray;
};
