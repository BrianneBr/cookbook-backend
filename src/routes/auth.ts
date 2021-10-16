import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import { User } from "../entity/User";

import bcrypt from "bcrypt";

import S from "fluent-json-schema";

const plugin: FastifyPluginAsync = async (fastify, opts) => {


	interface LoginBody {
		/**
		 * Username or email (whichever is being used to log in)
		 */
		login: string;

		/**
		 * Pretty self explanatory
		 */
		password: string;
	}

	fastify.post<{
		Body: LoginBody
	}>("/auth/login", async function (req, res) {
		// TODO: Add real password verification
		const repo = this.orm.getRepository(User);

		const user = await repo.findOne({
			where: { username: req.body.login }
		});

		// Fail if the user doesn't exist
		if (!user) {
			res.code(400).send(new Error('invalid login'));
			return;
		}

		// Fail if we can't verify the password hash
		if (!await bcrypt.compare(req.body.password, user.passwordHash)) {
			res.code(400).send(new Error('invalid login'));
			return;
		}

		// Sign the JWT payload
		const token = this.jwt.sign({
			user
		});

		return {
			token
		};
	});

	interface RegisterRequestBody {
		username: string;
		password: string;
	}

	// This is just copied from user/create
	fastify.post<{
		Body: RegisterRequestBody
	}>(
		"/auth/register",
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

			// Sign the JWT payload
			const token = this.jwt.sign({
				user
			});

			return {
				token
			};
		});
};

export default plugin;

async function createUser(username: string, password: string): Promise<User> {
	const user = new User();

	const salt = await bcrypt.genSalt();

	user.username = username;
	user.passwordHash = await bcrypt.hash(password, salt);

	return user;
}
