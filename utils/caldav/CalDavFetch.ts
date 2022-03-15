import CalDav from "./CalDAV";
import { DAVCalendar } from 'tsdav';

let dav = new CalDav();


export class CalDavFetch
{
   calDav: CalDav;

   constructor ()
   {

   }

   getList = () =>
   {
      let calendars: DAVCalendar;

      this.calDav.client.fetchCalendarObjects({
         calendar: calendars[ 0 ],
         headers: {
            authorization: 'Basic x0C9uFWd9Vz8OwS0DEAtkAlj',
         },
      });
   };

}
