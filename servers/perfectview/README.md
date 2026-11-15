# PerfectView MCP by usefulapi

Use your [PerfectView](https://www.perfectviewcrm.com) account from Claude, Cursor, or any MCP client. Search relations and relationships, read notes and products, and add notes to a relation. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://perfectview.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://perfectview.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http perfectview https://perfectview.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=perfectview&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fperfectview.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "perfectview": {
      "url": "https://perfectview.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PerfectView credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/perfectview/

<!-- connect:end (generated above, edit below) -->

On first connect you provide three values: the **API key**, the **database ID** and the **user ID**. Find them in PerfectView under **Settings → Connectors (Koppelingen) → API**, the tile under **Console**. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `perfectview_search_relations` | read | Search relations |
| `perfectview_get_relation` | read | Get a relation |
| `perfectview_get_relation_notes` | read | Get relation notes |
| `perfectview_add_relation_note` | **write** | Add a note to a relation |
| `perfectview_search_relationships` | read | Search relationships |
| `perfectview_get_relationship` | read | Get a relationship |
| `perfectview_get_activity` | read | Get an activity |
| `perfectview_list_products` | read | List products |
| `perfectview_get_relation_fields` | read | Get relation field definitions |
| `perfectview_usage_status` | meta | Usage status (free-tier meter) |
| `perfectview_request_feature` | meta | Request a missing feature |
| `perfectview_upgrade` | meta | Upgrade to Pro or Pro+ |
| `perfectview_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `perfectview_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `perfectview_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `perfectview_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
