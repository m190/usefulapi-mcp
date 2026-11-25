# Spectora MCP by usefulapi

Use your [Spectora](https://spectora.com) account from Claude, Cursor, or any MCP client. Read inspections, clients, agents, inspectors and availability, and create or update clients. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://spectora.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://spectora.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http spectora https://spectora.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spectora&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fspectora.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "spectora": {
      "url": "https://spectora.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Spectora credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/spectora/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Spectora API key** (API keys page of your Spectora account). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `spectora_list_inspections` | read | List inspections |
| `spectora_get_inspection` | read | Get an inspection |
| `spectora_list_inspection_attachments` | read | List inspection attachments |
| `spectora_list_availabilities` | read | List inspector availability |
| `spectora_list_contacts` | read | List clients |
| `spectora_get_contact` | read | Get a client |
| `spectora_create_contact` | **write** | Create a client |
| `spectora_update_contact` | **write** | Update a client |
| `spectora_list_agents` | read | List agents |
| `spectora_get_agent` | read | Get an agent |
| `spectora_get_agent_stats` | read | Get agent statistics |
| `spectora_list_inspectors` | read | List inspectors |
| `spectora_get_inspector` | read | Get an inspector |
| `spectora_list_services` | read | List services |
| `spectora_list_events` | read | List calendar events |
| `spectora_usage_status` | meta | Usage status (free-tier meter) |
| `spectora_request_feature` | meta | Request a missing feature |
| `spectora_upgrade` | meta | Upgrade to Pro or Pro+ |
| `spectora_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `spectora_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `spectora_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `spectora_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
