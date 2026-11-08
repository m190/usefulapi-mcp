# Fiix MCP by usefulapi

Use your [Fiix](https://www.fiixsoftware.com) account from Claude, Cursor, or any MCP client. It reads work orders, assets, purchase orders and accounts, and it changes nothing. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://fiix.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fiix.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fiix https://fiix.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fiix&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffiix.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fiix": {
      "url": "https://fiix.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Fiix credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fiix/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Fiix subdomain** (the part before `.macmms.com`), an **Application Key**, an **Access Key** and a **Secret Key**. A Fiix administrator creates the keys under **Settings → Connect Management → Fiix API Application Settings**, and the API needs a Fiix **Enterprise** plan. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fiix_find_objects` | read | Find objects |
| `fiix_get_object` | read | Get object by id |
| `fiix_count_objects` | read | Count objects |
| `fiix_usage_status` | meta | Usage status (free-tier meter) |
| `fiix_request_feature` | meta | Request a missing feature |
| `fiix_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fiix_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `fiix_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `fiix_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `fiix_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
