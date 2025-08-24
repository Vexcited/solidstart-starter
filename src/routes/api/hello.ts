import type { APIEvent } from "@solidjs/start/server";

export const GET = ({ request }: APIEvent) => {
  return {
    url: request.url,
    version: Bun.version,
  };
};
