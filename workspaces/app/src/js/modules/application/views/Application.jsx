import { useRoutes } from 'react-router-dom'

import 'scss'

import { modules, routes } from 'modules'

export const Application = () => {
  const element = useRoutes(routes)

  return (
    <>
      <modules.Header />
      {element}
    </>
  )
}
