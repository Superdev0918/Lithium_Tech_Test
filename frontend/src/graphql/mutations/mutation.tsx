import gql from 'graphql-tag';

const SignUpMutation = gql`
    mutation signup($first_name: String!, $last_name: String!, $email: String!, $password: String!) {
        signup(first_name: $first_name, last_name: $last_name, email: $email, password: $password)
}`;

const LoginMutation = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password)
}`;

const CreateCollectionMutation = gql`
    mutation create_collection($name: String!) {
        create_collection(name: $name) 
}`;


export {
  SignUpMutation,
  LoginMutation,
  CreateCollectionMutation,
};
