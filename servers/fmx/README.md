# FMX MCP by usefulapi

Use your [FMX](https://www.gofmx.com) account from Claude, Cursor, or any MCP client. Read-only access to buildings, equipment, inventory, resources, attachments and users in your tenant. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://fmx.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fmx.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fmx https://fmx.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fmx&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffmx.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fmx": {
      "url": "https://fmx.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your FMX credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fmx/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **FMX tenant** (the `acme` part of `acme.gofmx.com`), the **API user email** and the **API user password** of a dedicated API user. Create an API user type under Admin Settings → User Types, then create the user under Users. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fmx_list_buildings` | read | List buildings |
| `fmx_get_building` | read | Get building |
| `fmx_list_equipment` | read | List equipment records |
| `fmx_get_equipment` | read | Get equipment record |
| `fmx_list_inventory` | read | List inventory items |
| `fmx_get_inventory_item` | read | Get inventory item |
| `fmx_list_resources` | read | List resources |
| `fmx_get_resource` | read | Get resource |
| `fmx_list_attachments` | read | List attachments |
| `fmx_get_attachment` | read | Get attachment |
| `fmx_list_users` | read | List API-visible users |
| `fmx_usage_status` | meta | Usage status (free-tier meter) |
| `fmx_request_feature` | meta | Request a missing feature |
| `fmx_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fmx_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `fmx_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `fmx_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `fmx_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
