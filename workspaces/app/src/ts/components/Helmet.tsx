import { useLocation } from 'react-router-dom'
import { Helmet as H } from 'react-helmet-async'

import ogImage from 'imgs/react.jpg'

export const Helmet = ({
  title,
  description = '',
  keywords = '',
  type = 'text',
  url = '',
  image = ''
}: any ) => {
  const { pathname } = useLocation()

  const metaUrl = `${process.env.APP_URL}${url || pathname}`

  const metaImage = image || `${process.env.APP_URL}${ogImage}`

  return (
    <H>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Watscho Aiwasov" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />
      <title>{title}</title>
    </H>
  )
}
