# Gandi MCP by usefulapi

Use your [Gandi](https://www.gandi.net) account from Claude, Cursor, or any MCP client. Read domains and LiveDNS zones, and create or update DNS records. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://gandi.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://gandi.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http gandi https://gandi.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=gandi&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgandi.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "gandi": {
      "url": "https://gandi.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Gandi credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/gandi/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Gandi personal access token** (created in Gandi Admin, with domain and LiveDNS permissions). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `gandi_list_domains` | read | List domains |
| `gandi_get_domain` | read | Get a domain |
| `gandi_list_expiring_domains` | read | List domains expiring soon |
| `gandi_list_livedns_domains` | read | List LiveDNS domains |
| `gandi_list_zone_records` | read | List zone records |
| `gandi_get_zone_record` | read | Get a zone record |
| `gandi_create_zone_record` | **write** | Create a zone record |
| `gandi_update_zone_record` | **write** | Update a zone record |
| `gandi_usage_status` | meta | Usage status (free-tier meter) |
| `gandi_request_feature` | meta | Request a missing feature |
| `gandi_upgrade` | meta | Upgrade to Pro or Pro+ |
| `gandi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `gandi_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `gandi_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `gandi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
