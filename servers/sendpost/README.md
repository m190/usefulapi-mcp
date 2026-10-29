# SendPost MCP by usefulapi

https://sendpost.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sendpost.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sendpost https://sendpost.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sendpost&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsendpost.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sendpost": {
      "url": "https://sendpost.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SendPost credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sendpost/

<!-- connect:end (generated above, edit below) -->

Connect with a SendPost account or sub-account API key for the matching read-only tools. SendPost access is purchased separately.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sendpost_list_subaccounts` | read | List SendPost sub-accounts |
| `sendpost_get_subaccount` | read | Get SendPost sub-account |
| `sendpost_list_ips` | read | List SendPost sending IPs |
| `sendpost_get_ip` | read | Get SendPost sending IP |
| `sendpost_list_ip_pools` | read | List SendPost IP pools |
| `sendpost_get_ip_pool` | read | Get SendPost IP pool |
| `sendpost_list_account_stats` | read | List SendPost account daily statistics |
| `sendpost_get_account_stats` | read | Get SendPost account aggregate statistics |
| `sendpost_get_account_group_stats` | read | Get SendPost account group statistics |
| `sendpost_list_subaccount_stats` | read | List SendPost sub-account statistics |
| `sendpost_get_subaccount_stats` | read | Get SendPost sub-account aggregate statistics |
| `sendpost_get_message_metadata` | read | Get SendPost message metadata |
| `sendpost_list_domains` | read | List SendPost sending domains |
| `sendpost_get_domain` | read | Get SendPost sending domain |
| `sendpost_list_suppressions` | read | List SendPost suppressed recipients |
| `sendpost_usage_status` | meta | Usage status (free-tier meter) |
| `sendpost_request_feature` | meta | Request a missing feature |
| `sendpost_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `sendpost_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `sendpost_upgrade` (it returns a Stripe Checkout link). Cancel any time with `sendpost_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `sendpost_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
