# usefulapi

Hosted [MCP](https://modelcontextprotocol.io) servers for the tools you already use — connect
from Claude, Cursor, or any MCP client. No local install, no key-juggling: authorize once and go.

**Portal:** https://usefulapi.io

## Servers

| Server | Category | Tools | Auth | Docs |
|--------|----------|------:|------|------|
| [Linear](linear/) | project-management | 11 | OAuth | [linear/](linear/) |
| [Better Stack](betterstack/) | observability | 11 | API token | [betterstack/](betterstack/) |

_More servers land here as they launch — each is a folder with its own README + `server.json`,
and a tile on the [portal](https://usefulapi.io)._

## What's in each folder

- `README.md` — what the server does, tools, pricing, the "Add to Claude" snippet
- `server.json` — the [official MCP Registry](https://registry.modelcontextprotocol.io) record
  (namespace `io.github.m190/*`), pointing at the hosted endpoint

## License

MIT — see [LICENSE](LICENSE). Documentation only; servers are hosted.
