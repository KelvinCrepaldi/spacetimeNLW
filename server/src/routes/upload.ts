import { FastifyInstance } from "fastify";
import { send } from "process";

export async function uploadRoutes(app: FastifyInstance) {
  app.post("/upload", async (request, reply) => {
    const upload = await request.file({
      limits: {
        fileSize: 5242880, //5mb
      },
    });

    if (!upload) {
      return reply.status(400).send();
    }

    const mimeTypeRegex = /^(image|video)\/[a-zA-Z]+/;
    const isValidFileFormat = mimeTypeRegex.test(upload.mimetype);

    if (!isValidFileFormat) {
      return reply.status(400).send();
    }

    return isValidFileFormat;
  });
}
