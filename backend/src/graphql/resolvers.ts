import { IResolvers } from '@graphql-tools/utils';
import { merge } from 'lodash';
import UserResolvers from './resolvers/userResolvers';
import CollectionResolvers from './resolvers/collectionResolvers';

const resolverMap: IResolvers = merge(UserResolvers, CollectionResolvers);

export default resolverMap;