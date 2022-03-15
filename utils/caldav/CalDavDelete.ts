import { deleteCalendarObject, DAVCalendar } from 'tsdav';
import CalDav from "./CalDAV";

export class CalDavDelete
{
   calDav: CalDav;

   constructor ()
   {

   }

   delete = () =>
   {
      this.calDav.client.deleteCalendarObject({
         calendarObject: {
            url: 'https://caldav.icloud.com/123456/calendars/A5639426-B73B-4F90-86AB-D70F7F603E75/test.ics',
            etag: '"63758758580"',
         },
         headers: {
            authorization: 'Basic x0C9uFWd9Vz8OwS0DEAtkAlj',
         },
      });
   };

}
