# TinyPNG MCP by usefulapi

Use [TinyPNG](https://tinypng.com) from Claude, Cursor, or any MCP client — compress an image by URL, resize or convert the result (WebP, AVIF, PNG, JPEG), download it, and check how many compressions your key used this month.
Hosted, no local install: connect with your own TinyPNG credentials.

**Live endpoint:** `https://tinypng.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/tinypng

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tinypng.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tinypng https://tinypng.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tinypng&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftinypng.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tinypng": {
      "url": "https://tinypng.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TinyPNG credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tinypng/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tinypng_compress_image` | **write** | Compress an image from a URL |
| `tinypng_transform_image` | **write** | Resize, convert or keep metadata of a compressed image |
| `tinypng_download_image` | read | Download a compressed image |
| `tinypng_get_usage` | read | Get compression usage this month |
| `tinypng_usage_status` | meta | Usage status (free-tier meter) |
| `tinypng_request_feature` | meta | Request a missing feature |
| `tinypng_upgrade` | meta | Upgrade to Pro or Pro+ |
| `tinypng_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per API key) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `tinypng_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `tinypng_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `tinypng_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by TinyPNG.
