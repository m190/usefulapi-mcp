# BlueCamroo MCP by usefulapi

Use your [BlueCamroo](https://www.bluecamroo.com) account from Claude, Cursor, or any MCP client. Search organizations, read people, cases, invoices and sales quotes, add tasks, and add or update organizations and people. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bluecamroo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bluecamroo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bluecamroo https://bluecamroo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bluecamroo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbluecamroo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bluecamroo": {
      "url": "https://bluecamroo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your BlueCamroo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bluecamroo/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **BlueCamroo company subdomain** (the `acme` part of `acme.bluecamroo.com`), your **BlueCamroo administrator email** and your **BlueCamroo password**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bluecamroo_search_organizations` | read | Search organizations |
| `bluecamroo_get_organization` | read | Get organization |
| `bluecamroo_get_person` | read | Get person |
| `bluecamroo_get_opportunity` | read | Get opportunity |
| `bluecamroo_get_project` | read | Get project |
| `bluecamroo_get_case` | read | Get case |
| `bluecamroo_get_task` | read | Get task |
| `bluecamroo_get_invoice` | read | Get invoice |
| `bluecamroo_get_sales_quote` | read | Get sales quote |
| `bluecamroo_get_contact` | read | Get contact |
| `bluecamroo_get_time_entry` | read | Get logged time |
| `bluecamroo_get_event` | read | Get event |
| `bluecamroo_add_organization` | **write** | Add organization |
| `bluecamroo_update_organization` | **write** | Update organization |
| `bluecamroo_add_person` | **write** | Add person |
| `bluecamroo_update_person` | **write** | Update person |
| `bluecamroo_add_task` | **write** | Add task |
| `bluecamroo_usage_status` | meta | Usage status (free-tier meter) |
| `bluecamroo_request_feature` | meta | Request a missing feature |
| `bluecamroo_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bluecamroo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bluecamroo_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bluecamroo_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bluecamroo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
