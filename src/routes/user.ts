import { FastifyPluginAsync } from "fastify";

const plugin: FastifyPluginAsync = async (fastify, opts) => {
	fastify.get("/user", async () => {
		return {
            prop: new Date().toString()
        };
	});
};

export default plugin;
