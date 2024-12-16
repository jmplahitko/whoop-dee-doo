import { Collection, MongoClient } from 'mongodb';

export default async function monthlyJobCountsByCompanyStatus(collection: Collection<Document>) {
	const agg = [

	];

	const cursor = collection.aggregate(agg);
	return await cursor.toArray();
}


/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

