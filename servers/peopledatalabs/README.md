# People Data Labs MCP by usefulapi

Enrich and search people and companies, resolve identities, and enrich IPs — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your People Data Labs API key.

**Live endpoint:** `https://peopledatalabs.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/peopledatalabs

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://peopledatalabs.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http peopledatalabs https://peopledatalabs.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=peopledatalabs&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpeopledatalabs.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "peopledatalabs": {
      "url": "https://peopledatalabs.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/peopledatalabs/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your People Data Labs API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pdl_person_enrich` | read | Pdl person enrich |
| `pdl_person_identify` | read | Pdl person identify |
| `pdl_person_search` | read | Pdl person search |
| `pdl_company_enrich` | read | Pdl company enrich |
| `pdl_company_search` | read | Pdl company search |
| `pdl_ip_enrich` | read | Pdl ip enrich |
| `pdl_autocomplete` | read | Pdl autocomplete |
| `pdl_job_posting_search` | read | Pdl job posting search |
| `peopledatalabs_usage_status` | meta | Usage status (free-tier meter) |
| `peopledatalabs_upgrade` | meta | Upgrade to Pro (unlimited) |
| `peopledatalabs_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `peopledatalabs_upgrade` (it returns a Stripe Checkout link). Cancel any time with `peopledatalabs_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `peopledatalabs_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
