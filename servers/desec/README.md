# deSEC MCP by usefulapi

Use [deSEC](https://desec.io) from Claude, Cursor, or any MCP client — domains, DNSSEC keys, zone files and RRsets, plus guarded single-RRset writes.
Hosted, no local install: connect with your own deSEC credentials.

**Live endpoint:** `https://desec.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/desec

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://desec.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http desec https://desec.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=desec&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdesec.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "desec": {
      "url": "https://desec.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your deSEC credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/desec/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `desec_list_domains` | read | List domains |
| `desec_get_domain` | read | Get domain |
| `desec_export_zonefile` | read | Export zonefile |
| `desec_list_rrsets` | read | List RRsets |
| `desec_get_rrset` | read | Get RRset |
| `desec_create_rrset` | **write** | Create RRset |
| `desec_replace_rrset` | **write** | Replace RRset |
| `desec_usage_status` | meta | Usage status (free-tier meter) |
| `desec_request_feature` | meta | Request a missing feature |
| `desec_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `desec_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `desec_upgrade` (it returns a Stripe Checkout link). Cancel any time with `desec_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `desec_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by deSEC.
