import {gql} from "@apollo/client";
export const order =`mutation Insert_orders($objects: [orders_insert_input!]!) {
                                 insert_orders(objects: $objects) {
                                   affected_rows
                                   returning {
                                     id
                                   }
                                 }
                             }`
export const bookQuery =`query get($where: books_bool_exp) {
                books(where: $where) {
                    id
                    name
                     type
                     isActive
                     price
                    store_id
                    author
                    description
                    publisher
                    language
                    paperback
                    ratings
                    stars               
                  
                }
              }`
export  const queryStore =
    gql`
  query GetStores {
        stores {
          id
          name
          city
          lang
          address
        }
      }
`;
export const bookStore=
    `query Books($booksByPkId: uuid!) {
                books_by_pk(id: $booksByPkId) {
                    id
                    name
                     type
                     isActive
                     price
                    store_id
                    author
                    description
                    publisher
                    language
                    paperback
                    ratings
                    stars
                }
              }`