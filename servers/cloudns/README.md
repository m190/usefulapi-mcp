# ClouDNS MCP by usefulapi

Use your [ClouDNS](https://www.cloudns.net) account from Claude, Cursor, or any MCP client. Read DNS zones, records, failover settings and monitoring checks, and add TXT records. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://cloudns.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cloudns.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cloudns https://cloudns.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cloudns&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcloudns.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cloudns": {
      "url": "https://cloudns.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ClouDNS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cloudns/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **API user ID** (auth-id) and the **API password** (auth-password) of an API user that you create under API & Resellers in ClouDNS. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cloudns_list_zones` | read | List DNS zones |
| `cloudns_get_zone_info` | read | Get zone information |
| `cloudns_list_records` | read | List DNS records |
| `cloudns_add_txt_record` | **write** | Add a TXT record |
| `cloudns_get_failover_settings` | read | Get DNS failover settings |
| `cloudns_list_monitoring_checks` | read | List monitoring checks |
| `cloudns_usage_status` | meta | Usage status (free-tier meter) |
| `cloudns_request_feature` | meta | Request a missing feature |
| `cloudns_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cloudns_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `cloudns_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `cloudns_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `cloudns_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
