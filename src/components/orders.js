export const order =`mutation Insert_orders($objects: [orders_insert_input!]!) {
                                 insert_orders(objects: $objects) {
                                   affected_rows
                                   returning {
                                     id
                                   }
                                 }
                               }`