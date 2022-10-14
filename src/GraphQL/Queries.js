import { gql } from "@apollo/client"

export const LOAD_USERS = gql`
  query {
    getUsers(senderId: " ", appId: "luvhut") {
      _id
      appId
    }
  }
`
export const LOGIN_USER = gql`
  query login($senderId: String!, $appId: String!, $password: String!) {
    login(senderId: $senderId, appId: $appId, password: $password) {
      _id
      appId
    }
  }
`
