import { FastifyPluginAsync } from "fastify";

const plugin: FastifyPluginAsync = async (fastify, opts) => {
	fastify.get("/user", async () => {
		return {
            prop: new Date().toString()
        };
	});

    interface CreateUserRequest {
        username: string;
        password: string;
    }

    fastify.post<{Body: CreateUserRequest}>("/user/create", async (req) => {
        return req.body;
    });
};

export default plugin;
