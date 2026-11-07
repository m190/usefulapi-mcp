# dilisense MCP by usefulapi

Use your [dilisense](https://www.dilisense.com) account from Claude, Cursor, or any MCP client. Screen people and companies against sanction, PEP and adverse media lists. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://dilisense.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://dilisense.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http dilisense https://dilisense.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=dilisense&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdilisense.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "dilisense": {
      "url": "https://dilisense.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your dilisense credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/dilisense/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **dilisense API key** (in your dilisense dashboard). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `dilisense_check_individual` | read | Screen individual |
| `dilisense_check_entity` | read | Screen entity |
| `dilisense_media_check_individual` | read | Screen individual for adverse media |
| `dilisense_media_check_entity` | read | Screen entity for adverse media |
| `dilisense_list_source_lists` | read | List source lists |
| `dilisense_usage_status` | meta | Usage status (free-tier meter) |
| `dilisense_request_feature` | meta | Request a missing feature |
| `dilisense_upgrade` | meta | Upgrade to Pro or Pro+ |
| `dilisense_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `dilisense_upgrade` (it returns a Stripe Checkout link). Cancel any time with `dilisense_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `dilisense_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
