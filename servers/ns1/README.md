# NS1 MCP by usefulapi

Use [NS1](https://ns1.com) from Claude, Cursor, or any MCP client — zones, records, monitoring jobs, data sources and feeds, usage, QPS and billing, plus single-record writes.
Hosted, no local install: connect with your own NS1 credentials.

**Live endpoint:** `https://ns1.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/ns1

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ns1.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ns1 https://ns1.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ns1&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fns1.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ns1": {
      "url": "https://ns1.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your NS1 credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ns1/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ns1_list_zones` | read | List zones |
| `ns1_get_zone` | read | Get zone |
| `ns1_get_record` | read | Get record |
| `ns1_search` | read | Search zones and records |
| `ns1_list_monitoring_jobs` | read | List monitoring jobs |
| `ns1_get_monitoring_job` | read | Get monitoring job |
| `ns1_list_notify_lists` | read | List notifier lists |
| `ns1_list_data_sources` | read | List data sources |
| `ns1_get_data_source` | read | Get data source |
| `ns1_list_data_feeds` | read | List data feeds of a source |
| `ns1_get_data_feed` | read | Get data feed |
| `ns1_get_account_summary` | read | Get account summary |
| `ns1_get_usage_stats` | read | Get query usage statistics |
| `ns1_get_qps_stats` | read | Get queries per second |
| `ns1_get_billing_records` | read | Get records usage (billing) |
| `ns1_get_billing_queries` | read | Get query usage (billing) |
| `ns1_create_record` | **write** | Create DNS record |
| `ns1_update_record` | **write** | Update DNS record |
| `ns1_usage_status` | meta | Usage status (free-tier meter) |
| `ns1_request_feature` | meta | Request a missing feature |
| `ns1_upgrade` | meta | Upgrade to Pro (unlimited) |
| `ns1_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `ns1_upgrade` (it returns a Stripe Checkout link). Cancel any time with `ns1_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `ns1_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by NS1.
