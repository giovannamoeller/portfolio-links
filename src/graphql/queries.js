import { gql } from "@apollo/client";

const LINKS = gql`
  query {
    allLinks {
      id
      name
      url
      icon {
        url
      }
      description
      isyoutubevideo
    }
  }
`;

export default LINKS;