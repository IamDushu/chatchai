import { gql } from "@apollo/client"

export const CREATE_USER_MUTATION = gql`
  mutation register($senderId: String!, $appId: String!) {
    register(senderId: $senderId, appId: $appId) {
      _id
      appId
    }
  }
`
