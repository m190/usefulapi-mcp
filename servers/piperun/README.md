# PipeRun MCP by usefulapi

Use your [PipeRun](https://www.pipe.run) account from Claude, Cursor, or any MCP client. Read and create deals, people, companies and activities, and update deals and people. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://piperun.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://piperun.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http piperun https://piperun.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=piperun&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpiperun.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "piperun": {
      "url": "https://piperun.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PipeRun credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/piperun/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **PipeRun user API token** (PipeRun user area, left side under your photo). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `piperun_list_deals` | read | List deals |
| `piperun_get_deal` | read | Get a deal |
| `piperun_create_deal` | **write** | Create a deal |
| `piperun_update_deal` | **write** | Update a deal |
| `piperun_list_persons` | read | List persons |
| `piperun_get_person` | read | Get a person |
| `piperun_create_person` | **write** | Create a person |
| `piperun_update_person` | **write** | Update a person |
| `piperun_list_companies` | read | List companies |
| `piperun_get_company` | read | Get a company |
| `piperun_create_company` | **write** | Create a company |
| `piperun_list_activities` | read | List activities |
| `piperun_get_activity` | read | Get an activity |
| `piperun_create_activity` | **write** | Create an activity |
| `piperun_list_pipelines` | read | List pipelines |
| `piperun_list_stages` | read | List stages |
| `piperun_list_items` | read | List items |
| `piperun_list_notes` | read | List notes |
| `piperun_list_users` | read | List users |
| `piperun_get_user` | read | Get a user |
| `piperun_usage_status` | meta | Usage status (free-tier meter) |
| `piperun_request_feature` | meta | Request a missing feature |
| `piperun_upgrade` | meta | Upgrade to Pro or Pro+ |
| `piperun_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `piperun_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `piperun_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `piperun_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
