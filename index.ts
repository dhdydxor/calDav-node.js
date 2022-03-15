import CalDav from "./utils/caldav/CalDAV";
import { CalDavCreate } from "./utils/caldav/CalDavCreate";

const calDav = new CalDav();

(async () =>
{
   await calDav.init();
   calDav.create("a");
});