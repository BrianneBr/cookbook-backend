import { FastifyPluginAsync } from "fastify";
import { User } from "../entity/User";
import bcrypt from "bcrypt";

import S from "fluent-json-schema";

const plugin: FastifyPluginAsync = async (fastify, opts) => {
	fastify.get("/user", async function () {
		const repo = this.orm.getRepository(User);
		return repo.createQueryBuilder().getMany();
	});

	interface CreateUserRequest {
		username: string;
		password: string;
	}

	fastify.post<{ Body: CreateUserRequest }>(
		"/user/create",
        {
            schema: {
                body: S.object()
                    .prop("username", S.string().required())
                    .prop("password", S.string().required())
            }
        },
		async function (req) {
			const user = await createUser(req.body.username, req.body.password);
			await this.orm.getRepository(User).save(user);
			return user;
		}
	);
};

export default plugin;

async function createUser(username: string, password: string): Promise<User> {
	const user = new User();

	const salt = await bcrypt.genSalt();

	user.username = username;
	user.passwordHash = await bcrypt.hash(password, salt);

	return user;
}
