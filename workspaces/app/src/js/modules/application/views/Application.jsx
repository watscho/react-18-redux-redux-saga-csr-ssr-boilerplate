import { useRoutes } from 'react-router-dom'

import 'scss'

import { modules, routes } from 'modules'

export const Application = () => {
  const element = useRoutes(routes)

  console.log('render - Application')

  return (
    <>
      <modules.Header />
      {element}
    </>
  )
}
