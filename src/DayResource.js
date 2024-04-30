import PropTypes from 'prop-types'
import React from 'react'

import { navigate } from './utils/constants'
import { DayLayoutAlgorithmPropType } from './utils/propTypes'

import TimeGrid from './TimeGrid'

class DayResource extends React.Component {
  render() {
    /**
     * This allows us to default min, max, and scrollToTime
     * using our localizer. This is necessary until such time
     * as TODO: TimeGrid is converted to a functional component.
     */
    let {
      date,
      localizer,
      min = localizer.startOf(new Date(), 'DayResource'),
      max = localizer.endOf(new Date(), 'DayResource'),
      scrollToTime = localizer.startOf(new Date(), 'DayResource'),
      enableAutoScroll = true,
      ...props
    } = this.props
    let range = DayResource.range(date, { localizer: localizer })

    return (
      <>
        <TimeGrid
          {...props}
          range={range}
          eventOffset={10}
          localizer={localizer}
          min={min}
          max={max}
          scrollToTime={scrollToTime}
          enableAutoScroll={enableAutoScroll}
        />
        <TimeGrid
          {...props}
          range={range}
          eventOffset={10}
          localizer={localizer}
          min={min}
          max={max}
          scrollToTime={scrollToTime}
          enableAutoScroll={enableAutoScroll}
        />
        <TimeGrid
          {...props}
          range={range}
          eventOffset={10}
          localizer={localizer}
          min={min}
          max={max}
          scrollToTime={scrollToTime}
          enableAutoScroll={enableAutoScroll}
        />
      </>
    )
  }
}

DayResource.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,

  events: PropTypes.array.isRequired,
  backgroundEvents: PropTypes.array.isRequired,
  resources: PropTypes.array,

  step: PropTypes.number,
  timeslots: PropTypes.number,
  range: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
  getNow: PropTypes.func.isRequired,

  scrollToTime: PropTypes.instanceOf(Date),
  enableAutoScroll: PropTypes.bool,
  showMultiDayResourceTimes: PropTypes.bool,

  rtl: PropTypes.bool,
  resizable: PropTypes.bool,
  width: PropTypes.number,

  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,

  allDayResourceMaxRows: PropTypes.number,

  selected: PropTypes.object,
  selectable: PropTypes.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: PropTypes.number,

  onNavigate: PropTypes.func,
  onSelectSlot: PropTypes.func,
  onSelectEnd: PropTypes.func,
  onSelectStart: PropTypes.func,
  onSelectEvent: PropTypes.func,
  onDoubleClickEvent: PropTypes.func,
  onKeyPressEvent: PropTypes.func,
  onShowMore: PropTypes.func,
  onDrillDown: PropTypes.func,
  getDrilldownView: PropTypes.func.isRequired,

  DayLayoutAlgorithmPropType: DayLayoutAlgorithmPropType,

  showAllEvents: PropTypes.bool,
  doShowMoreDrillDown: PropTypes.bool,

  popup: PropTypes.bool,
  handleDragStart: PropTypes.func,

  popupOffset: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ]),
}

DayResource.range = (date, { localizer }) => {
  return [localizer.startOf(date, 'DayResource')]
}

DayResource.navigate = (date, action, { localizer }) => {
  switch (action) {
    case navigate.PREVIOUS:
      return localizer.add(date, -1, 'DayResource')

    case navigate.NEXT:
      return localizer.add(date, 1, 'DayResource')

    default:
      return date
  }
}

DayResource.title = (date, { localizer }) =>
  localizer.format(date, 'DayResourceHeaderFormat')

export default DayResource
