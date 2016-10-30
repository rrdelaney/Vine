declare module 'react-list' {
  import { Component } from 'react'

  interface ReactListProps {
    axis?: 'x' | 'y'
    initialIndex?: number
    itemRenderer: (index: number, key: any) => JSX.Element
    length?: number
    pageSize?: number
    type?: 'simple' | 'variable' | 'uniform'
    useTranslate3d?: boolean
  }

  class ReactList extends Component<ReactListProps, {}> {}

  namespace ReactList {}

  export = ReactList
}