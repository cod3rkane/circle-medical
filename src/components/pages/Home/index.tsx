import { searchAction } from '@/store/ducks/app/app'
import { ApplicationState } from '@/store/reducers'
import React from 'react'
import { connect } from 'react-redux'

interface IProps {
  items: string[]
  onClick: () => void
}

export function Home({ items, onClick }: IProps): JSX.Element {
  return (
    <div>
      Hello World! {items.length}
      <button onClick={onClick}>
        Click
      </button>
    </div>
  )
}

const mapStateToProps = ({ app }: ApplicationState) => ({
  items: app.data.items
})

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(searchAction('test')),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
