import { APIGatewayProxyHandler } from "aws-lambda";
import * as fs from "fs";
import "source-map-support/register";

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  const path = "/mnt/efs/test.txt";
  const buffer = fs.readFileSync(path, "utf8");
  console.log("buffer: ", buffer.toString());
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
