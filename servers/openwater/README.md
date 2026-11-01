# OpenWater MCP by usefulapi

Use your [OpenWater](https://www.getopenwater.com) account from Claude, Cursor, or any MCP client. Read programs, applications, evaluations, sessions and funds, and create or update users. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://openwater.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://openwater.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http openwater https://openwater.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=openwater&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fopenwater.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "openwater": {
      "url": "https://openwater.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your OpenWater credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/openwater/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **OpenWater domain** (for example yourorg.secure-platform.com) and an **OpenWater API key** (System Settings → **Permissions → API Keys**). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `openwater_list_programs` | read | List programs |
| `openwater_get_program` | read | Get a program |
| `openwater_list_applications` | read | List applications |
| `openwater_get_application` | read | Get an application |
| `openwater_list_users` | read | List users |
| `openwater_get_user` | read | Get a user |
| `openwater_create_user` | **write** | Create a user |
| `openwater_update_user` | **write** | Update a user |
| `openwater_list_evaluations` | read | List evaluations |
| `openwater_list_sessions` | read | List sessions |
| `openwater_list_funds` | read | List funds |
| `openwater_usage_status` | meta | Usage status (free-tier meter) |
| `openwater_request_feature` | meta | Request a missing feature |
| `openwater_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `openwater_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `openwater_upgrade` (it returns a Stripe Checkout link). Cancel any time with `openwater_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `openwater_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
