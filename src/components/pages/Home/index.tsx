import { ApplicationState } from '@/store/reducers'
import React from 'react'
import { connect } from 'react-redux'

interface IProps {
  items: string[]
}

export function Home({ items }: IProps): JSX.Element {
  return (
    <div>
      Hello World! {items.length}
    </div>
  )
}

const mapStateToProps = ({ app }: ApplicationState) => ({
  items: app.data.items
})

export default connect(mapStateToProps)(Home)
