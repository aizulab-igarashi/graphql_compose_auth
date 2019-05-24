import { schemaComposer } from 'graphql-compose';

import BookModel from '../models/book.js';

import { composeWithMongoose } from 'graphql-compose-mongoose';

const customizationOptions = {};
const Book = composeWithMongoose(BookModel, customizationOptions);

schemaComposer.Query.addFields({
    bookById: Book.getResolver('findById'),
    bookByIds: Book.getResolver('findByIds'),
    bookOne: Book.getResolver('findOne'),
    bookMany: Book.getResolver('findMany'),
    bookCount: Book.getResolver('count'),
    bookConnection: Book.getResolver('connection'),
    bookPagination: Book.getResolver('pagination')
});

schemaComposer.Mutation.addFields({
    bookCreate: Book.getResolver('createOne'),
    bookCreateMany: Book.getResolver('createMany'),
    bookUpdateById: Book.getResolver('updateById'),
    bookUpdateOne: Book.getResolver('updateOne'),
    bookUpdateMany: Book.getResolver('updateMany'),
    bookRemoveById: Book.getResolver('removeById'),
    bookRemoveOne: Book.getResolver('removeOne'),
    bookRemoveMany: Book.getResolver('removeMany')
});

export default schemaComposer.buildSchema();
