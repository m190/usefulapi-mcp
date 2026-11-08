# Roadmunk MCP by usefulapi

Use your [Roadmunk](https://roadmunk.com) account from Claude, Cursor, or any MCP client. Read roadmaps, items and milestones, and create or update items and milestones. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://roadmunk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://roadmunk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http roadmunk https://roadmunk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=roadmunk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Froadmunk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "roadmunk": {
      "url": "https://roadmunk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Roadmunk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/roadmunk/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Roadmunk API access token** and your **region** (Roadmunk → Account Settings → Integrations → API Tokens). An account admin creates it. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `roadmunk_get_account` | read | Get account details |
| `roadmunk_list_users` | read | List users |
| `roadmunk_get_user` | read | Get a user |
| `roadmunk_list_roadmaps` | read | List roadmaps |
| `roadmunk_get_roadmap` | read | Get a roadmap |
| `roadmunk_list_items` | read | List or search roadmap items |
| `roadmunk_get_item` | read | Get a roadmap item |
| `roadmunk_list_milestones` | read | List or search milestones |
| `roadmunk_get_milestone` | read | Get a milestone |
| `roadmunk_get_field` | read | Get a field definition |
| `roadmunk_create_item` | **write** | Create a roadmap item (WRITE) |
| `roadmunk_update_item` | **write** | Update a roadmap item (WRITE) |
| `roadmunk_create_milestone` | **write** | Create a milestone (WRITE) |
| `roadmunk_update_milestone` | **write** | Update a milestone (WRITE) |
| `roadmunk_usage_status` | meta | Usage status (free-tier meter) |
| `roadmunk_request_feature` | meta | Request a missing feature |
| `roadmunk_upgrade` | meta | Upgrade to Pro or Pro+ |
| `roadmunk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `roadmunk_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `roadmunk_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `roadmunk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
