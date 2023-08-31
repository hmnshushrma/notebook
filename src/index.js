import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import AppContainer from './views/'
import { Provider } from 'react-redux'
import store from './store/store'

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered')
  })

  return (
    <Provider store={store}>
      <AppContainer tab='home' />
    </Provider>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<AppWithCallbackAfterRender />)
