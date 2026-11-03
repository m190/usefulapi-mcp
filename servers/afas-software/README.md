# AFAS Software MCP by usefulapi

Use your [AFAS Software](https://www.afas.nl) account from Claude, Cursor, or any MCP client. Browse the connectors your AFAS app connector activates, and read their fields and records. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://afas-software.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://afas-software.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http afas-software https://afas-software.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=afas-software&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fafas-software.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "afas-software": {
      "url": "https://afas-software.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your AFAS Software credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/afas-software/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **AFAS environment ID** (the number in your AFAS address, for example 12345 from O12345AA), the **environment type** and an **AFAS app connector token** (created in Profit under General → Management → App connector). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `afas_get_metainfo` | read | List connectors |
| `afas_get_connector_meta` | read | Get connector fields |
| `afas_get_connector` | read | Read a connector |
| `afas_usage_status` | meta | Usage status (free-tier meter) |
| `afas_request_feature` | meta | Request a missing feature |
| `afas_upgrade` | meta | Upgrade to Pro or Pro+ |
| `afas_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `afas_upgrade` (it returns a Stripe Checkout link). Cancel any time with `afas_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `afas_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
