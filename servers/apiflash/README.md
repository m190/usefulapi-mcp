# ApiFlash MCP by usefulapi

Use [ApiFlash](https://apiflash.com) from Claude, Cursor, or any MCP client — website screenshots, page HTML and text extraction, and quota.
Hosted, no local install: connect with your own ApiFlash credentials.

**Live endpoint:** `https://apiflash.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/apiflash

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://apiflash.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http apiflash https://apiflash.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=apiflash&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fapiflash.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "apiflash": {
      "url": "https://apiflash.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ApiFlash credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/apiflash/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `apiflash_get_quota` | read | Get screenshot quota |
| `apiflash_capture_screenshot` | **write** | Capture a website screenshot |
| `apiflash_extract_page_content` | **write** | Extract page text or HTML |
| `apiflash_usage_status` | meta | Usage status (free-tier meter) |
| `apiflash_request_feature` | meta | Request a missing feature |
| `apiflash_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `apiflash_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `apiflash_upgrade` (it returns a Stripe Checkout link). Cancel any time with `apiflash_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `apiflash_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by ApiFlash.
