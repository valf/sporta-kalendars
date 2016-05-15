import React from "react";
import { connect } from "react-redux";
import fullcalendar from "fullcalendar";
import $ from "jquery";

require("./full-calendar.styl");


class FullCalendar extends React.Component {
    componentDidMount() {
        // weird expression so that babel doesn't throw out the module
        fullcalendar && $(this.fullCalendarContainer).fullCalendar({
            header: {
                left: "prev,next today",
                center: "title",
                right: "month,basicWeek,basicDay"
            },
            firstDay: 1,
            defaultDate: "2016-05-14",
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: "/fetch-events"
        });
    }
    render() {
        return (
            <div
                className="full-calendar-container"
                ref={(ref) => (this.fullCalendarContainer = ref)}
            >
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(FullCalendar);
