# Refersion MCP by usefulapi

Use your [Refersion](https://www.refersion.com) account from Claude, Cursor, or any MCP client. Read affiliates, their activity, tracking links, custom fields, conversions and prospects, and resend an affiliate welcome email. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://refersion.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://refersion.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http refersion https://refersion.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=refersion&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frefersion.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "refersion": {
      "url": "https://refersion.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Refersion credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/refersion/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **OAuth client ID** and **OAuth client secret**, made in Refersion under **Settings → Integrations → Refersion API Keys → Generate OAuth Client**. Refersion shows the secret once. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `refersion_list_affiliates` | read | List affiliates |
| `refersion_get_affiliate_activity` | read | Get affiliate activity |
| `refersion_get_affiliate_link` | read | Get affiliate tracking link |
| `refersion_get_affiliate_custom_fields` | read | Get affiliate custom fields |
| `refersion_get_conversion` | read | Get conversion detail |
| `refersion_list_prospects` | read | List affiliate prospects |
| `refersion_resend_welcome_email` | **write** | Resend affiliate welcome email |
| `refersion_usage_status` | meta | Usage status (free-tier meter) |
| `refersion_request_feature` | meta | Request a missing feature |
| `refersion_upgrade` | meta | Upgrade to Pro or Pro+ |
| `refersion_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `refersion_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `refersion_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `refersion_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
