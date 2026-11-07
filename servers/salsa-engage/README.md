# Salsa Engage MCP by usefulapi

Use your [Salsa Engage](https://www.salsalabs.com) account from Claude, Cursor, or any MCP client. Read supporters, donations, email blast results and segments, and create or update supporters. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://salsa-engage.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://salsa-engage.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http salsa-engage https://salsa-engage.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=salsa-engage&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsalsa-engage.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "salsa-engage": {
      "url": "https://salsa-engage.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Salsa Engage credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/salsa-engage/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Salsa Engage organization API token** (Salsa Engage → Organization Settings → API → Integration). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `salsa_get_call_metrics` | read | Get API call metrics |
| `salsa_search_supporters` | read | Search supporters |
| `salsa_get_supporter_groups` | read | Get supporter groups |
| `salsa_search_transactions` | read | Search transactions |
| `salsa_search_activities` | read | Search activities |
| `salsa_search_email_blasts` | read | Search email blasts |
| `salsa_get_email_blast_results` | read | Get email blast results |
| `salsa_search_segments` | read | Search segments |
| `salsa_search_segment_members` | read | Search segment members |
| `salsa_list_custom_fields` | read | List custom fields |
| `salsa_upsert_supporters` | **write** | Create or update supporters |
| `salsa_usage_status` | meta | Usage status (free-tier meter) |
| `salsa_request_feature` | meta | Request a missing feature |
| `salsa_upgrade` | meta | Upgrade to Pro or Pro+ |
| `salsa_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `salsa_upgrade` (it returns a Stripe Checkout link). Cancel any time with `salsa_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `salsa_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
