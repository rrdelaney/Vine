declare module 'react-virtualized' {
  import { Component } from 'react'

  interface ListProps {
    /**
     * 	Outer height of List is set to "auto". This property should only be used in conjunction with the WindowScroller HOC.
     */
    autoHeight?:	boolean
    /**
     * 	Optional custom CSS class name to attach to root List element.
     */
    className?:	string
    /**
     * 	Used to estimate the total height of a List before all of its rows have actually been measured. The estimated total height is adjusted as rows are rendered.
     */
    estimatedRowSize?:	number
    /**
     * Height constraint for list (determines how many actual rows are rendered)
     */
    height?:	number
    /**
     * 	Optional custom id to attach to root List element.
     */
    id?:	string
    /**
     * 	Callback used to render placeholder content when rowCount is 0
     */
    noRowsRenderer?:	Function
    /**
     * 	Callback invoked with information about the slice of rows that were just rendered: ({ overscanStartIndex: number, overscanStopIndex: number, startIndex: number, stopIndex: number }): void
     */
    onRowsRendered?:	Function
    /**
     * 	Callback invoked whenever the scroll offset changes within the inner scrollable region: ({ clientHeight: number, scrollHeight: number, scrollTop: number }): void
     */
    onScroll?:	Function
    /**
     * 	number of rows to render above/below the visible bounds of the list. This can help reduce flickering during scrolling on certain browers/devices.
     */
    overscanRowCount?:	number
    /**
     * number of rows in list.
     */
    rowCount?:	number
    /**
     * or Function	Either a fixed row height (number) or a function that returns the height of a row given its index: ({ index: number }): number
     */
    rowHeight?:	number
    /**
     * Responsible for rendering a row. Signature should look like ({ index: number, key: string, style: Object, isScrolling: boolean }): React.PropTypes.node and the returned element must handle index, key and style.
     */
    rowRenderer?:	Function
    /**
     * 	Controls the alignment scrolled-to-rows. The default ("auto") scrolls the least amount possible to ensure that the specified row is fully visible. Use "start" to always align rows to the top of the list and "end" to align them bottom. Use "center" to align them in the middle of container.
     */
    scrollToAlignment?:	string
    /**
     * 	Row index to ensure visible (by forcefully scrolling if necessary)
     */
    scrollToIndex?:	number
    /**
     * 	Forced vertical scroll offset; can be used to synchronize scrolling between components
     */
    scrollTop?:	number
    /**
     * 	Optional custom inline style to attach to root List element.
     */
    style?:	Object
    /**
     * 	Optional override of tab index default; defaults to 0.
     */
    tabIndex?:	number
    /**
     * Width of the list
     */
    width?:	number
  }

  export class List extends Component<ListProps, {}> {}
}