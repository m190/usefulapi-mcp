# Short.io MCP by usefulapi

Use your [Short.io](https://short.io) account from Claude, Cursor, or any MCP client. Read domains and short links, and create, update, archive or unarchive links. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://short-io.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://short-io.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http short-io https://short-io.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=short-io&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fshort-io.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "short-io": {
      "url": "https://short-io.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Short.io credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/short-io/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Short.io secret API key** (in Short.io under **Integrations and API**, with **Create API key**). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `shortio_list_domains` | read | List domains |
| `shortio_get_domain` | read | Get a domain |
| `shortio_list_links` | read | List links |
| `shortio_get_link` | read | Get a link |
| `shortio_get_link_by_path` | read | Get a link by path |
| `shortio_create_link` | **write** | Create a link |
| `shortio_update_link` | **write** | Update a link |
| `shortio_archive_link` | **write** | Archive a link |
| `shortio_unarchive_link` | **write** | Unarchive a link |
| `shortio_usage_status` | meta | Usage status (free-tier meter) |
| `shortio_request_feature` | meta | Request a missing feature |
| `shortio_upgrade` | meta | Upgrade to Pro or Pro+ |
| `shortio_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `shortio_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `shortio_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `shortio_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
