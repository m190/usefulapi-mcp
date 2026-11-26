# RD Station MCP by usefulapi

Use your [RD Station](https://www.rdstation.com) account from Claude, Cursor, or any MCP client. It reads CRM contacts, deals, pipelines, tasks and activities, and it writes contacts, deals and tasks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://rd-station.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rd-station.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rd-station https://rd-station.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rd-station&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frd-station.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rd-station": {
      "url": "https://rd-station.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your RD Station credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rd-station/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **RD Station CRM user token** (your CRM profile, token section). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rdstation_get_current_user` | read | Get the connected user |
| `rdstation_list_users` | read | List users |
| `rdstation_list_contacts` | read | List contacts |
| `rdstation_get_contact` | read | Get a contact |
| `rdstation_create_contact` | **write** | Create a contact |
| `rdstation_update_contact` | **write** | Update a contact |
| `rdstation_list_deals` | read | List deals |
| `rdstation_get_deal` | read | Get a deal |
| `rdstation_create_deal` | **write** | Create a deal |
| `rdstation_update_deal` | **write** | Update a deal |
| `rdstation_list_pipelines` | read | List pipelines |
| `rdstation_list_stages` | read | List stages |
| `rdstation_list_organizations` | read | List companies |
| `rdstation_list_tasks` | read | List tasks |
| `rdstation_create_task` | **write** | Create a task |
| `rdstation_list_activities` | read | List activities |
| `rdstation_list_custom_fields` | read | List custom fields |
| `rdstation_usage_status` | meta | Usage status (free-tier meter) |
| `rdstation_request_feature` | meta | Request a missing feature |
| `rdstation_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rdstation_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `rdstation_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `rdstation_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `rdstation_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
