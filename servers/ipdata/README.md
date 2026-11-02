# ipdata MCP by usefulapi

Use your [ipdata](https://ipdata.co) account from Claude, Cursor, or any MCP client. Look up location, network, company and threat data for IP addresses, look up autonomous systems, and check up to 100 IP addresses in one call. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ipdata.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ipdata.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ipdata https://ipdata.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ipdata&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fipdata.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ipdata": {
      "url": "https://ipdata.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ipdata credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ipdata/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **ipdata API key**, found in your [ipdata dashboard](https://dashboard.ipdata.co/), and the **endpoint**: global or EU only. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ipdata_lookup_ip` | read | Look up an IP address |
| `ipdata_get_threat` | read | Get threat data for an IP address |
| `ipdata_get_asn_for_ip` | read | Get the ASN of an IP address |
| `ipdata_get_company` | read | Get the company behind an IP address |
| `ipdata_lookup_asn` | read | Look up an AS number |
| `ipdata_bulk_lookup` | read | Look up many IP addresses |
| `ipdata_usage_status` | meta | Usage status (free-tier meter) |
| `ipdata_request_feature` | meta | Request a missing feature |
| `ipdata_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `ipdata_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `ipdata_upgrade` (it returns a Stripe Checkout link). Cancel any time with `ipdata_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `ipdata_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
