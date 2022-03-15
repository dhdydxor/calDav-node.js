import { createCalendarObject, DAVCalendar } from "tsdav";
import CalDav from "./CalDAV";

export class CalDavCreate
{
   calDav: CalDav;

   constructor (calDav: CalDav)
   {
      this.calDav = calDav;
   }

   create = (...args) =>
   {
      let calendars: DAVCalendar;

      this.calDav.client.createCalendarObject({
         calendar: calendars,
         filename: 'test.ics',
         iCalString: 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//ZContent.net//Zap Calendar 1.0//EN\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\nBEGIN:VEVENT\nSUMMARY:Abraham Lincoln\nUID:c7614cff-3549-4a00-9152-d25cc1fe077d\nSEQUENCE:0\nSTATUS:CONFIRMED\nTRANSP:TRANSPARENT\nRRULE:FREQ=YEARLY;INTERVAL=1;BYMONTH=2;BYMONTHDAY=12\nDTSTART:20080212\nDTEND:20080213\nDTSTAMP:20150421T141403\nCATEGORIES:U.S. Presidents,Civil War People\nLOCATION:Hodgenville, Kentucky\nGEO:37.5739497;-85.7399606\nDESCRIPTION:Born February 12, 1809\nSixteenth President (1861-1865)\n\n\n\n \nhttp://AmericanHistoryCalendar.com\nURL:http://americanhistorycalendar.com/peoplecalendar/1,328-abraham-lincol\n n\nEND:VEVENT\nEND:VCALENDAR',
         headers: {
            authorization: 'Basic x0C9ueWd9Vz8OwS0DEAtkAlj',
         },
      });
   };
}