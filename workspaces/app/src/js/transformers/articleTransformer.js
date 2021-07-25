export const articleTransformer = {
  fetchArticles: ({ articles }) =>
    articles.map(({ id, title, description }) => ({
      id,
      title,
      description
    }))
}
