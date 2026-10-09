# DNSimple MCP by usefulapi

Manage your domains and DNS records from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your DNSimple API token.

**Live endpoint:** `https://dnsimple.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/dnsimple

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://dnsimple.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http dnsimple https://dnsimple.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=dnsimple&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdnsimple.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "dnsimple": {
      "url": "https://dnsimple.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your DNSimple credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/dnsimple/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your DNSimple API token. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `dnsimple_whoami` | read | Who am I |
| `dnsimple_list_domains` | read | List domains |
| `dnsimple_get_domain` | read | Get a domain |
| `dnsimple_list_zone_records` | read | List zone records |
| `dnsimple_get_zone_record` | read | Get a zone record |
| `dnsimple_check_domain` | read | Check domain availability |
| `dnsimple_get_domain_prices` | read | Get domain prices |
| `dnsimple_list_zones` | read | List zones |
| `dnsimple_list_contacts` | read | List contacts |
| `dnsimple_create_zone_record` | **write** | Create a zone record |
| `dnsimple_update_zone_record` | **write** | Update a zone record |
| `dnsimple_delete_zone_record` | **write** | Delete a zone record |
| `dnsimple_usage_status` | meta | Usage status (free-tier meter) |
| `dnsimple_request_feature` | meta | Request a missing feature |
| `dnsimple_upgrade` | meta | Upgrade to Pro (unlimited) |
| `dnsimple_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `dnsimple_upgrade` (it returns a Stripe Checkout link). Cancel any time with `dnsimple_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `dnsimple_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
