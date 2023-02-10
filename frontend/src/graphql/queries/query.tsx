import gql from 'graphql-tag';

const MeQuery = gql`
    query {
        me {
            id
            first_name
            last_name
            email
        }
}`;

const CollectionsQuery = gql`
{
    collections{
        id
        name
    }
}`;

export {
  MeQuery,
  CollectionsQuery
};
