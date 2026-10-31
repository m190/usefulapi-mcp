# ipapi.is MCP by usefulapi

Use your [ipapi.is](https://ipapi.is) account from Claude, Cursor, or any MCP client. Look up IP addresses and AS numbers: owner, abuse contact, location, and VPN, proxy, Tor and datacenter flags. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ipapi-is.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ipapi-is.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ipapi-is https://ipapi-is.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ipapi-is&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fipapi-is.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ipapi-is": {
      "url": "https://ipapi-is.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ipapi.is credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ipapi-is/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **ipapi.is API key** (copy it from your ipapi.is dashboard). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ipapi_lookup_ip` | read | Look up an IP address |
| `ipapi_lookup_asn` | read | Look up an AS number |
| `ipapi_bulk_lookup` | read | Look up many IPs or AS numbers |
| `ipapi_usage_status` | meta | Usage status (free-tier meter) |
| `ipapi_request_feature` | meta | Request a missing feature |
| `ipapi_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `ipapi_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `ipapi_upgrade` (it returns a Stripe Checkout link). Cancel any time with `ipapi_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `ipapi_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
