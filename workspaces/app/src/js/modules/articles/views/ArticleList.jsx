import { ArticleItem } from './ArticleItem'

import { useArticlesService } from 'hooks/services'

export const ArticleList = () => {
  const {
    articles: { data, errors, loading }
  } = useArticlesService()

  return (
    <>
      {(loading || errors) && <p>Loading...</p>}
      {!loading && (
        <div className="articles">
          {data.map(({ title, description }, index) => (
            <ArticleItem key={index} title={title} description={description} />
          ))}
        </div>
      )}
    </>
  )
}
