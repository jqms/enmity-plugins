//TO DO:
//1. fix permission shit
//2. bug hunt
//3. settings screen (optional toasts)
//4. release

import { FormRow } from 'enmity/components';
import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { getIDByName } from 'enmity/api/assets';
import { bulk, filters, getByProps } from 'enmity/metro';
import { React, Toasts, Constants } from 'enmity/metro/common';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

const Patcher = create('cut');

const [
   Clipboard,
   LazyActionSheet,
   MessageStore,
   Permissions,
   User
] = bulk(
   filters.byProps('setString'),
   filters.byProps("openLazy", "hideActionSheet"),
   filters.byProps("getMessage", "getMessages"),
   filters.byProps("getChannelPermissions"),
   filters.byProps('getCurrentUser')
);

const Cut: Plugin = {
   ...manifest,

   onStart() {
   let DeleteMessage = getByProps("deleteMessage")
      Patcher.before(LazyActionSheet, "openLazy", (_, [component, sheet], _res) => {
         if (sheet === "MessageLongPressActionSheet") {
            component.then((instance) => {
               Patcher.after(instance, "default", (_, message, res) => {
                  if (!res.props) {
                     console.log(`[Cut Local Error: Property "Props" Does not Exist on "res"]`)
                     return res;
                  }
                  let finalLocation = res?.props?.children?.props?.children?.props?.children[1]
                  const addItem = (finalLocation: any) => {
                     let findItem: any = finalLocation.find((e: any) => e.props.message=="Copy Text")
                     if (!findItem) return false
                     let indexOfButon = finalLocation.indexOf(findItem)
                     return indexOfButon+1
                  }
                  if(finalLocation[addItem(finalLocation)].key=='512') { return }
                  const originalMessage = MessageStore.getMessage(
                     message[0].message.channel_id,
                     message[0].message.id
                     );
                     const formElem = <FormRow
                     key="512"
                     leading = {<FormRow.Icon source={getIDByName("leaf")}/>}
                     label="Cut Message"
                     onPress={() => {
                        Toasts.open({
                           content: "Cut Message Successfully",
                           source: getIDByName("leaf"),
                     });
                        Clipboard.setString(originalMessage.content)

                        DeleteMessage.deleteMessage(`${originalMessage.channel_id}`, `${originalMessage.id}`)

                        LazyActionSheet.hideActionSheet()
                     }}
                     
                     />

                     const logErr = () => {console.log("Failed to find the 'Copy Text' property, meaning this is likely an embed, or an attachment with no context.")}

                     let user = User.getCurrentUser()
                     addItem(finalLocation) ?
                        originalMessage.author.username===user.username ?
                           finalLocation.splice(addItem(finalLocation), 0, formElem) 
                        : Permissions.can(Constants.Permissions.MANAGE_MESSAGES) 
                           ? finalLocation.splice(addItem(finalLocation), 0, formElem) 
                        : logErr()
                     : logErr()
               });
            });
         }
      })
   },
   onStop() {
      Patcher.unpatchAll();
   }
};

registerPlugin(Cut);
