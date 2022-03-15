import { createDAVClient } from "tsdav";
import DavConfig from "~/dav-config.json";
import { CalDavCreate } from './CalDavCreate';

interface CalDavSearchQuery
{
   uid?: string;
   createDate?: Date;
   startDate?: Date;
   endDate?: Date;
   location?: string;
   description?: string;
   summary?: string;
   attendee?: string | string[];
}

class CalDav
{
   client: any;
   createDav: CalDavCreate;

   constructor ()
   {

   }

   async init()
   {
      return new Promise((resolve, reject) =>
      {
         this.initDavClient().then((v) =>
         {
            this.client = v;
            this.createDav = new CalDavCreate(v);
            resolve(true);
         });
      });
   }

   create = (v) =>
   {
      this.createDav.create(v);
   };

   initDavClient = async (): Promise<any> =>
   {
      return new Promise(async (resolve, reject) =>
      {
         let dav: any;

         try
         {
            dav = await createDAVClient({
               serverUrl: 'https://dav.privateemail.com',
               credentials: {
                  username: DavConfig.caldav.username,
                  password: DavConfig.caldav.password,
               },
               authMethod: 'Basic',
               defaultAccountType: 'caldav',
            });
         }
         catch (e)
         {
            reject(e);
         }
         finally
         {
            resolve(dav);
         }
      });
   };
}

export default CalDav;