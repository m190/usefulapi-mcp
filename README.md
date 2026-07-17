# usefulapi

Hosted [MCP](https://modelcontextprotocol.io) servers for the tools you already use — connect
from Claude, Cursor, or any MCP client. No local install, no key-juggling: authorize once and go.

**Portal:** https://usefulapi.io

## Servers

| Server | Category | Tools | Auth | Docs |
|--------|----------|------:|------|------|
| [Linear](linear/) | project-management | 11 | OAuth | [linear/](linear/) |
| [Better Stack](betterstack/) | observability | 11 | API token | [betterstack/](betterstack/) |
| [Loops](loops/) | email | 12 | API token | [loops/](loops/) |
| [Mixpanel](mixpanel/) | analytics | 9 | API token | [mixpanel/](mixpanel/) |
| [Fireworks AI](fireworks/) | ai-infra | 16 | API token | [fireworks/](fireworks/) |
| [Uploadcare](uploadcare/) | image-cdn | 13 | API token | [uploadcare/](uploadcare/) |
| [Cronitor](cronitor/) | observability | 8 | API token | [cronitor/](cronitor/) |
| [MailerLite](mailerlite/) | email | 15 | API token | [mailerlite/](mailerlite/) |
| [Checkly](checkly/) | observability | 24 | API token | [checkly/](checkly/) |
| [Mindee](mindee/) | document-ai | 6 | API token | [mindee/](mindee/) |
| [DocRaptor](docraptor/) | documents | 6 | API token | [docraptor/](docraptor/) |
| [Mistral](mistral/) | ai-infra | 17 | API token | [mistral/](mistral/) |
| [Orb](orb/) | billing | 28 | API token | [orb/](orb/) |
| [Chargebee](chargebee/) | billing | 15 | API token | [chargebee/](chargebee/) |
| [Lob](lob/) | direct-mail | 20 | API token | [lob/](lob/) |
| [GoCardless](gocardless/) | payments | 17 | API token | [gocardless/](gocardless/) |

_More servers land here as they launch — each is a folder with its own README + `server.json`,
and a tile on the [portal](https://usefulapi.io)._

## What's in each folder

- `README.md` — what the server does, tools, pricing, the "Add to Claude" snippet
- `server.json` — the [official MCP Registry](https://registry.modelcontextprotocol.io) record
  (namespace `io.github.m190/*`), pointing at the hosted endpoint

## License

MIT — see [LICENSE](LICENSE). Documentation only; servers are hosted.
