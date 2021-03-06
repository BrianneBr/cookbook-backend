import "reflect-metadata";
import { createConnection } from "typeorm";

// import {User} from "./entity/User";

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     // user.firstName = "Timber";
//     // user.lastName = "Saw";
//     // user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));

import Fastify, { FastifyInstance } from "fastify";

async function setupServer(): Promise<FastifyInstance> {
	const connection = await createConnection();

	const app = Fastify({
        logger: true
    });

	app.register(import("fastify-typeorm-plugin"), {
		connection,
	});

	app.register(import("./routes/user"));

	return app;
}

async function createServer(app: FastifyInstance) {
	try {
		await app.listen(8080);
	} catch (err) {
		app.log.error({ err }, "failed to listen");
		process.exit(1);
	}
}

(async () => {
	const fastify = await setupServer();
	await createServer(fastify);
})();
